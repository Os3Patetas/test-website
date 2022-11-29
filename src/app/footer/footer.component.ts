import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "footer-component",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.scss"],
})
export class FooterComponent implements OnInit {
  textSize = "1em";

  @Output() eventEmitter: any = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  mudaSize() {
    if (this.textSize === "1.5em") {
      this.textSize = "1em";
      this.eventEmitter.emit(this.textSize);
      return;
    }
    this.textSize = "1.5em";
    this.eventEmitter.emit(this.textSize);
  }
}
