import axios from 'axios';

export class CapivaraFileupload {
    public $constants;
    public $functions;
    public $bindings;

    private element
    private file
    private fileContent: File
    private size

    constructor(private $scope, private $element) {
        this.element = $element
    }

    clearCurrentFile() {
        this.file = null
        this.size = 0
        this.fileContent = null
    }

    filePicker() {
        this.element.getElementsByTagName('input')[0].click()
    }

    onSelectFile() {
        this.fileContent = this.element.getElementsByTagName('input')[0].files[0];
        this.size = this.formatBytes(this.fileContent.size)
    }

    formatBytes(bytes, decimals?) {
        if (bytes == 0) return '0 Bytes'
        var k = 1024
        var numberOfDecimals = decimals || 2
        var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
        var i = Math.floor(Math.log(bytes) / Math.log(k))
        var fileSize = parseFloat((bytes / Math.pow(k, i)).toFixed(numberOfDecimals))
        if (this.$bindings.fileMaxSize) {
            if (fileSize > this.$bindings.fileMaxSize) {
                return 'Tamanho maior que o arquivo permitido'
            } else {
                return fileSize + ' ' + sizes[i]
            }
        } else {
            return fileSize + ' ' + sizes[i]
        }
    }

    uploadFile() {
        axios({
            method: 'post',
            url: this.$bindings.url,
            data: {
                firstName: 'Fred',
                lastName: 'Flintstone'
            }
        })
            .catch(function (error) {
                console.log(error);
            });
    }
}