# IAM-PAPERLESS
Pa los compas nomas

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.


## Versiones

* ANGULAR `9.1.0`
* NODE JS `v14.15.4`
* NPM `7.5.2`

## Recomendaciones

#### GIT

Ejecutar los siguientes comandos en GIT BASH
```bash
git checkout -b -t <ramalocal> <origin/ramaservidor>

git config --global alias.lg "log --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset' --abbrev-commit --date=relative"
git config --local commit.template .gitmensaje
```
##### Eviten usar

* **git commit -m "mensaje"**

#### VISUAL STUDIO CODE

##### :muscle: plugins recomendados 
#### :Emmet
##### :Angular 10 Snippets - TypeScript, Html, Angular Material, ng
#### :Angular Language Service
#### :vscode-icons

Ejecutar en CMD 



#### Documentacion

URL DE LEOPOLDO Y BETO

## Configuración general de aplicación
* ng serve 





## Plugins agregados
```
Material : '
Flexbox: 
```

## Roles iniciales

* **`ROLE_ADMIN`** -> Administrador
* **`null`** -> 
* **`null`** -> 

 
## Usuarios iniciales




**app.component.ts `deveria ser lo más simple posible ya que es el bootstrap de nuestra app`**

```
@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
  styleUrls: ['./app.component.scss']
})
```


## ROUTING

> Ejemplo de  routing, 

Buenas paracticas de como usar el routing, para heredar a partir de una plantilla

```
const routes: Routes = [
  {
    path:'',
    component:LayoutComponent,
    children:[
      {
        path:'',
        redirectTo:'character',
        pathMatch:'full'
      },
      {
        path:'',
        loadChildren:() => import('./character/character.module').then(m => CharacterModule)
      }
    ]
  },
  {
    path:'**',
    loadChildren:() => import('./not-found/not-found.module').then(m =>NotFoundModule)
  }
];
```
### comandos 
```
ng new iam-paperless                     //crea proyecto
ng add @angular/material                 //Agrega material desing
npm i flexboxgrid --save                 //instala flebox y configuralo en **`Angular.json`** 
npm i bootstrap equerry @popperjs/core   //instala bootstrap y dependecias,  y configuralo en **`Angular.json`** JS y CSS

ng g m material      //crea Modulo material, buenas practicas, solo se importa en modulos a usar

ng g c layout       //sitema de plantillas => contiene al header y footer y container.                                  

ng g module shared                      // Crea el modulo compartido shared y dos componentes comunes
ng g c shared/conponents/footer  
ng g c shared/components/header    

ng g m character --routing             //Crea el modulo y rute de Personajes con sus componentes
ng g c character/components/character-card   
ng g c character/components/character-detail                                                                         
ng g c character/components/character-list                                                                           

ng g m not-found --routing             //crea pagina para 404
ng g c not-found/components/not-found   

ng g m core //genera el core de servicios
ng g s core/services/character 
```
