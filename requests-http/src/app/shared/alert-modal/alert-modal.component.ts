import { Component, Input, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-alert-modal',
  templateUrl: './alert-modal.component.html',
  styleUrls: ['./alert-modal.component.scss']
})
export class AlertModalComponent implements OnInit {

  constructor(private bsModalRef: BsModalRef) { }

  @Input() message?: string;
  @Input() type?: 'success';

  ngOnInit(): void {
  }

  onClose(){
    this.bsModalRef.hide();
  }

}
