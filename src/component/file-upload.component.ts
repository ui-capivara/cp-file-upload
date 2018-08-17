export class CapivaraFileupload {
    public $constants;
    public $functions;
    public $bindings;

    private uploadedFile: boolean
    private element
    private file

    constructor(private $scope, private $element) {
        this.element = $element
    }

    $onInit() {
        this.uploadedFile = true
    }


    filePicker() {
        this.element.getElementsByTagName('input')[0].click()
    }

    onSelectFile() {
    }

}