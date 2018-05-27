import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpClientModule } from '@angular/common/http';

import { UtilProvider } from '../providers/util/util';
import { LoginProvider } from '../providers/login/login';

import { LoginPage } from '../pages/login/login';
import { ContaPage } from '../pages/conta/conta';
import { TermoPage } from '../pages/termo/termo';
import { PoliticaPage } from '../pages/politica/politica';
import { CodigoPage } from '../pages/codigo/codigo';
import { ProcessosPage } from '../pages/processos/processos';
import { IntroPage } from '../pages/intro/intro';
import { LocalStorageProvider } from '../providers/local-storage/local-storage';
import { CadastroPage } from '../pages/cadastro/cadastro';
import { RegistroReclamacaoPage } from '../pages/registro-reclamacao/registro-reclamacao';
import { RegistroReclamacaoProvider } from '../providers/registro-reclamacao/registro-reclamacao';
import { ReclamacaoPage } from '../pages/reclamacao/reclamacao';
import { Camera } from '@ionic-native/camera';
import { FileTransfer } from '@ionic-native/file-transfer';
import { ReclamacaoAnexosPageModule } from '../pages/reclamacao-anexos/reclamacao-anexos.module';
import { RegistroReclamacaoPageModule } from '../pages/registro-reclamacao/registro-reclamacao.module';

import { CadastroProvider } from '../providers/cadastro/cadastro';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    ContaPage,
    TermoPage,
    PoliticaPage,
    CodigoPage,
    ProcessosPage,
    IntroPage,
    CadastroPage,
    ReclamacaoPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    RegistroReclamacaoPageModule,
    ReclamacaoAnexosPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    ContaPage,
    TermoPage,
    PoliticaPage,
    CodigoPage,
    ProcessosPage, 
    IntroPage,
    CadastroPage,
    ReclamacaoPage
  ],
  providers: [
    StatusBar,
    SplashScreen, Camera, FileTransfer,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UtilProvider,
    LoginProvider,
    LocalStorageProvider,
    RegistroReclamacaoProvider,
    CadastroProvider
  ]
})
export class AppModule {}
