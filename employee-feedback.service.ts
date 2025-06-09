import { Injectable } from '@angular/core';
import { ApiService } from './api-service.service';


@Injectable({
    providedIn: 'root'
})
export class EmployeeFeedbackService {

    constructor(private apiService: ApiService) { }

    getSkills() {
        return this.apiService.get("/feedback/api/allSkill");
    }

    getEmployees() {
        return this.apiService.get("/feedback/api/allEmployee");
    }

    getEmployeeFedbacksByEmployeeId(employeeId: any) {
        return this.apiService.get('/feedback/api/getEmployeeFedbacksByEmployeeId/' + employeeId);
    }

    getFeedbackEmployees() {
        return this.apiService.get("/feedback/api/getFeedbackEmployees");
    }

    getEmployeeFeedbacks() {
        return this.apiService.get("/feedback/api/allEmployeeFeedback");
    }

    saveEmployeeFeedback(employeeFeedback: string) {
        return this.apiService.post("/feedback/api/saveEmployeeFeedback", employeeFeedback);
    }

    downloadEmployeeFeedbackTemplate() {
        return this.apiService.getFile("/feedback/api/download-employee-feedback-template")
    }

    uploadEmployeeFeedback(formData: any) {
        return this.apiService.postData("/feedback/api/upload-employee-feedback", formData)
    }

    deleteEmployeeFeedback(employeeFeedbackId: number) {
        return this.apiService.delete("/feedback/api/delete-employee-feedback/" + employeeFeedbackId)
    }
}
