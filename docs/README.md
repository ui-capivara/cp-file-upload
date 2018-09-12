# Introdução
O componente cp-file-upload pode ser utilizado para fazer upload de arquivos. Ele também pode controlar o tamanho máximo e a extensão que os arquivos possuem. Além de possuir a opção de inserção de funções durante todo o envio do arquivo até o seu destino.
------
# Instalação

## CDN
Recomendamos vincular a um número de versão específico que você possa atualizar manualmente, porém no exemplo iremos utilizar a ultima versão disponível.
```html
<!-- Stylesheet -->
<link rel="stylesheet" href="https://unpkg.com/@uicapivara/cp-counter@latest/dist/cp-file-upload.min.css">

<!-- Component -->
<script src="https://unpkg.com/@uicapivara/cp-counter@latest/dist/cp-file-upload.min.js"></script>
```
Certifique-se de ler sobre as diferentes construções e use a produção, substituindo os arquivos .js por .min.js. Esta é uma compilação otimizada para velocidade em vez de experiência de desenvolvimento.

## NPM
O NPM é o método de instalação recomendado ao criar aplicativos de grande escala. Ele combina muito bem com bundlers de módulo, como Webpack ou Browserify.

```shell
$ npm install @uicapivara/cp-file-upload --save
```
Após a instalação, precisamos importar o componente no projeto.

Se seu projeto utiliza **typescript** você pode importar o componente normalmente.
```javascript
import '@uicapivara/cp-file-upload';
```
Caso contrário é necessário importa-los especificando o arquivo **js**. Exemplo:
```javascript
import '@uicapivara/cp-file-upload/index.js';
```

# Como usar

Se chegamos até aqui, provavelmente a instalação foi finalizada êxito, isso significa que já podemos utilizar o cp-counter.
Vamos agora criar uma nova instância do componente. Para isso basta colocarmos no HTML o nome do compoente e também uma `class` que possuirá as propriedades de configuração do componente.

```html
<cp-file-upload cp-model="$ctrl.cpModel"
                attribute="$ctrl.attribute"
                end-point="$ctrl.endPoint"
                ></cp-file-upload>
```

```javascript
class MyController {
    constructor() {
        this.cpModel = "entity.comprovante"
        this.attribute = "comprovante"
        this.endPoint = "https://gumga.io/viagem-api/api/viagem/comprovantes"
    }
}
capivara.controller(document.body, MyController);
```
<!-- 
Disponibilizamos alguns exemplos utilizando o componente juntamente com outros frameworks.

*   CapivaraJS - [JSFiddle]()
*   Angular.js - [JSFiddle]()
*   Angular - [JSFiddle]()
*   Vue.js - [JSFiddle]()
*   React.js - [JSFiddle]() -->

!> Lembre-se de que é necessário colocar o código `JavaScript` dentro de um elemento `<script>` no `HTML`.


## Parâmetros

O componente possui alguns parâmetros para a customização, a tabela abaixo mostra mais informações sobre eles

| Atributo           | Tipo       | Requerido | Descrição |
| :-----------------:| :--------: | :-------: | :--------------------------: |
| model              | `Object`   | `Sim`     | Objeto onde será inserido o a resposta do `endpoint` |
| attribute          | `String`   | `Sim`     | Nome do parâmetro que fará a requisição para o `endpoint` |
| endpoint           |	`String`  | `Sim`     | URL do endpoint onde será o arquivo como POST |
| accepted           |	`String`  | `Não`     | Extensões aceitar para upload, separadas por vírgula |
| max-size           |	`String`  | `Não`     | Tamaho máximo aceito pelo arquivo, em bytes |
| on-upload-start    | `Function` | `Não`     | Função que será disparada quando o upload iniciar |
| on-upload-complete | `Function` | `Não`     | Função que será disparada quando o upload terminar |
| on-upload-abort    | `Function` | `Não`     | Função que será disparada se o upload for abortado |
| on-upload-error    | `Function` | `Não`     | Função que será disparada se houver algum erro |
| delete-method      | `Function` | `Não`     | Função que será executada para deletar o aquivo do espaço temporário.|

!> O cp-file-upload fará uma chamada POST para a url informada no `endpoint` com o nome do parâmetro informado no `attribute`.

# Exemplo

Um exemplo de utilização de todos os parâmetros que o componente possui, vale lembrar que o componente possui alguns parâmetros obrigatórios para o seu funcionamento, a tabela anterior já lista quais são eles. O exemplo mostra como devemos configurar o componente com as customizações desejadas.

```html
    <cp-file-upload cp-model="$ctrl.cpModel"
                    attribute="$ctrl.attribute"
                    end-point="$ctrl.endPoint"
                    file-max-size="$ctrl.fileMaxSize"
    ></cp-file-upload>
```

```js
    <script>
        class MyController {
            constructor() {
                this.cpModel = "entity.comprovante"
                this.attribute = "comprovante"
                this.endPoint = "https://gumga.io/viagem-api/api/viagem/comprovantes"
                this.fileMaxSize = 1000000000
            }
        }
        capivara.controller(document.body, MyController);
    </script>
```