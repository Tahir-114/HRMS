import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './shared/home/home.component';
import { LoginComponent } from './shared/login/login.component';
import { CreateOrganizationComponent } from './shared/create-organization/create-organization.component';
import { FooterComponent } from './shared/footer/footer.component';
import { DashboardComponent } from './shared/dashboard/dashboard.component';
import { ReactiveFormsModule } from '@angular/forms';
import{ HttpClientModule } from '@angular/common/http';
import { UserManagementComponent } from './shared/user-management/user-management.component';
import { SidenavComponent } from './shared/sidenav/sidenav.component';
import { CreateRoleComponent } from './shared/user-management/create-role/create-role.component';
import { HeaderComponent } from './shared/header/header.component';
import { EditUserComponent } from './shared/user-management/edit-user/edit-user.component';
import { JobsResumeComponent } from './shared/jobs/jobs-resume/jobs-resume.component';
import { CreateJobComponent } from './shared/jobs/create-job/create-job.component';
import { UploadResumeComponent } from './shared/jobs/upload-resume/upload-resume.component';
import { CandidatesComponent } from './shared/candidates/candidates.component';
import { AddCandidatesComponent } from './shared/candidates/add-candidates/add-candidates.component';
import { ScheduleInterviewComponent } from './shared/candidates/schedule-interview/schedule-interview.component';
import { InterEvaluationComponent } from './shared/candidates/inter-evaluation/inter-evaluation.component';
import { OfferConfirmationComponent } from './shared/candidates/offer-confirmation/offer-confirmation.component';
import { FinalStageComponent } from './shared/candidates/final-stage/final-stage.component';
import { SendOfferComponent } from './shared/candidates/send-offer/send-offer.component';
import { OnboardingComponent } from './shared/candidates/onboarding/onboarding.component';
import { ReportingGraphComponent } from './shared/candidates/reporting-graph/reporting-graph.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    CreateOrganizationComponent,
    FooterComponent,
    DashboardComponent,
    UserManagementComponent,
    SidenavComponent,
    CreateRoleComponent,
    HeaderComponent,
    EditUserComponent,
    JobsResumeComponent,
    CreateJobComponent,
    UploadResumeComponent,
    CandidatesComponent,
    AddCandidatesComponent,
    ScheduleInterviewComponent,
    InterEvaluationComponent,
    OfferConfirmationComponent,
    FinalStageComponent,
    SendOfferComponent,
    OnboardingComponent,
    ReportingGraphComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
