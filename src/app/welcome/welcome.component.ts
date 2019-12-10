import { Component, OnInit } from "@angular/core";
import { Quiz } from "../quiz.model";
import { QuestionsService } from "../questions.service";

@Component({
  selector: "app-welcome",
  templateUrl: "./welcome.component.html",
  styleUrls: ["./welcome.component.scss"]
})
export class WelcomeComponent implements OnInit {
  quiz: Quiz[];

  constructor(public questionsService: QuestionsService) {}

  ngOnInit() {
    this.questionsService.getQuizzes().subscribe(quiz => {
      this.quiz = quiz;
    });
  }
}
