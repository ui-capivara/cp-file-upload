import { Component, Controller, OnInit } from 'capivarajs';
import template from './file-upload.template.html';
import style from './file-upload.style.scss';
import axios from 'axios';

@Component({
  tag: 'cp-file-upload',
  template,
  style,
  bindings: ['cpModel', 'attribute'],
  functions: ['onUploadStart', 'onUploadComplete', 'onUploadAbort', 'onUploadError', 'deleteMethod'],
  constants: ['fileMaxSize', 'endPoint', 'acceptedFiles'],
})

export class CapivaraFileupload extends Controller implements OnInit {

  private visibleMessage: boolean;
  private element
  private file
  private fileContent: File
  private size
  private acceptedFiles
  private error

  constructor(public $scope, public $element) {
    super($scope, $element);
  }

  $onInit() {
    if (!this.$bindings.cpModel) {
      throw new Error("cpModel é uma parâmetro obrigatório")
    } else if (!this.$bindings.attribute) {
      throw new Error("attribute é uma parâmetro obrigatório")
    } else if (!this.$constants.endPoint) {
      throw new Error("endPoint é uma parâmetro obrigatório")
    }
  }

  clearCurrentFile() {
    this.file = null
    this.size = 0
    this.fileContent = null
    this.error = null
  }

  filePicker() {
    this.$element.getElementsByTagName('input')[0].click()
  }

  onSelectFile() {
    this.fileContent = this.$element.getElementsByTagName('input')[0].files[0];
    this.size = this.formatBytes(this.fileContent.size)
  }

  formatBytes(bytes, decimals?) {
    if (bytes > this.$constants.fileMaxSize) {
      this.error = 'Tamanho do arquivo excedido!'
      return ''
    }

    if (bytes == 0) return '0 Bytes'
    var k = 1024
    var numberOfDecimals = decimals || 2
    var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
    var i = Math.floor(Math.log(bytes) / Math.log(k))
    var fileSize = parseFloat((bytes / Math.pow(k, i)).toFixed(numberOfDecimals))
    return fileSize + ' ' + sizes[i]
  }

  uploadFile() {
    var formDataFile = new FormData()
    formDataFile.append(this.$bindings.attribute, this.fileContent)

    axios({
      method: 'post',
      url: this.$bindings.endPoint,
      data: {
        file: formDataFile
      }
    }).then(function (response) {
      this.$bindings.cpModel = response.data
    }).catch(function (error) {
      console.log(error)
    })
  }

  getSvgClass() {
    if (!this.file && !this.error) {
      return { 'svg-disabled': true }
    } else {
      return { 'svg-disabled': false }
    }
  }

}
