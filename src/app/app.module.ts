import { AppErrorHandler } from './common/app-error-handler';
import { PostService } from './services/post.service';
import { HttpModule } from '@angular/http';
import { PostComponent } from './post/post.component';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { SignupFormComponent } from './signup-form/signup-form.component';
import { SummaryPipe } from './summary.pipe';
import { CoursesService } from './courses.service';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { CourseComponent } from './course/course.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { PanelComponent } from './panel/panel.component';
import { NewCourseFormComponent } from './new-course-form/new-course-form.component';


@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseComponent,
    SummaryPipe,
    FavoriteComponent,
    PanelComponent,
    SignupFormComponent,
    NewCourseFormComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    // HttpModule,
    HttpClientModule
  ],
  providers: [
    CoursesService,
     PostService,
      {
        provide: ErrorHandler, useClass: AppErrorHandler
      }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
