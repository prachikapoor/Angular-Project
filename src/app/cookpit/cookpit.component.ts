import { Content } from '@angular/compiler/src/render3/r3_ast';
import { ElementRef } from '@angular/core';
import { ViewChild } from '@angular/core';
import { Output } from '@angular/core';
import { Component, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-cookpit',
  templateUrl: './cookpit.component.html',
  styleUrls: ['./cookpit.component.css']
})
export class CookpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  // newServerName = '';
  // newServerContent = '';
  @ViewChild('serverContentInput', { static: true }) serverContentInput: ElementRef;


  constructor() { }

  ngOnInit(): void {
  }
  onAddServer(nameInput: HTMLInputElement) {
    this.serverCreated.emit({
      serverName:nameInput.value,
      serverContent: this.serverContentInput.nativeElement.value
    });
  }
  onAddBlueprint(nameInput: HTMLInputElement) {
    this.blueprintCreated.emit({
      serverName:nameInput.value,
      serverContent: this.serverContentInput.nativeElement.value
    });
  }

  // onAddBlueprint() {
  //   this.blueprintCreated.emit({
  //     serverName:this.newServerName,
  //     serverContent: this.newServerContent
  //   });
  // }

}
