import { Component, AfterViewInit } from '@angular/core';
declare var Handsontable: any;


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  container: any;
  hot: any;

  ngAfterViewInit() {
    this.container = document.getElementById('example');


    this.hot = new Handsontable(this.container, {
      data: this.getModelGroupData(),
      columns: this.getColumns(),
      rowHeaders: true,
      colHeaders: true,
      disableVisualSelection: true,
      // performance tip: set constant size
      colWidths: 80,
      rowHeights: 23,
      // performance tip: turn off calculations
      autoRowSize: false,
      autoColSize: false
    });

  }

  getColumns() {
    return [{ data: 'Series' }, { data: 'available', type: 'checkbox', width: 80 }, { data: 'available2', type: 'checkbox' }, { data: 'available3', type: 'checkbox' }, { data: 'available4', type: 'checkbox' }, { data: 'available5', type: 'checkbox' }, { data: 'available6', type: 'checkbox' }, { data: 'available7', type: 'checkbox' }, { data: 'available8', type: 'checkbox' }, { data: 'available9', type: 'checkbox' }, { data: 'available10', type: 'checkbox' }, { data: 'available11', type: 'checkbox' }, { data: 'available12', type: 'checkbox' }, { data: 'available13', type: 'checkbox' }, { data: 'available14', type: 'checkbox' }, { data: 'available15', type: 'checkbox' }, { data: 'available16', type: 'checkbox' }, { data: 'available17', type: 'checkbox' }, { data: 'available18', type: 'checkbox' }];
  }
  getModelGroupData() {
    return [
      { Series: "100", available: false, available2: false, available3: false, available4: false, available5: false, available6: false, available7: false, available8: false, available9: false, available10: false, available11: false, available12: false, available13: false, available14: false, available15: false, available16: false, available17: false, available18: false },
      { Series: "200", available: false, available2: false, available3: false, available4: false, available5: false, available6: false, available7: false, available8: false, available9: false, available10: false, available11: false, available12: false, available13: false, available14: false, available15: false, available16: false, available17: false, available18: false },
      { Series: "300", available: false, available2: false, available3: false, available4: false, available5: false, available6: false, available7: false, available8: false, available9: false, available10: false, available11: false, available12: false, available13: false, available14: false, available15: false, available16: false, available17: false, available18: false },
      { Series: "400", available: false, available2: false, available3: false, available4: false, available5: false, available6: false, available7: false, available8: false, available9: false, available10: false, available11: false, available12: false, available13: false, available14: false, available15: false, available16: false, available17: false, available18: false },
      { Series: "500", available: false, available2: false, available3: false, available4: false, available5: false, available6: false, available7: false, available8: false, available9: false, available10: false, available11: false, available12: false, available13: false, available14: false, available15: false, available16: false, available17: false, available18: false },
      { Series: "600", available: false, available2: false, available3: false, available4: false, available5: false, available6: false, available7: false, available8: false, available9: false, available10: false, available11: false, available12: false, available13: false, available14: false, available15: false, available16: false, available17: false, available18: false },
      { Series: "700", available: false, available2: false, available3: false, available4: false, available5: false, available6: false, available7: false, available8: false, available9: false, available10: false, available11: false, available12: false, available13: false, available14: false, available15: false, available16: false, available17: false, available18: false },
      { Series: "800", available: false, available2: false, available3: false, available4: false, available5: false, available6: false, available7: false, available8: false, available9: false, available10: false, available11: false, available12: false, available13: false, available14: false, available15: false, available16: false, available17: false, available18: false },
      { Series: "900", available: false, available2: false, available3: false, available4: false, available5: false, available6: false, available7: false, available8: false, available9: false, available10: false, available11: false, available12: false, available13: false, available14: false, available15: false, available16: false, available17: false, available18: false },
      { Series: "1000", available: false, available2: false, available3: false, available4: false, available5: false, available6: false, available7: false, available8: false, available9: false, available10: false, available11: false, available12: false, available13: false, available14: false, available15: false, available16: false, available17: false, available18: false },
      { Series: "2000", available: false, available2: false, available3: false, available4: false, available5: false, available6: false, available7: false, available8: false, available9: false, available10: false, available11: false, available12: false, available13: false, available14: false, available15: false, available16: false, available17: false, available18: false },
      { Series: "3000", available: false, available2: false, available3: false, available4: false, available5: false, available6: false, available7: false, available8: false, available9: false, available10: false, available11: false, available12: false, available13: false, available14: false, available15: false, available16: false, available17: false, available18: false },
      { Series: "4000", available: false, available2: false, available3: false, available4: false, available5: false, available6: false, available7: false, available8: false, available9: false, available10: false, available11: false, available12: false, available13: false, available14: false, available15: false, available16: false, available17: false, available18: false },
      { Series: "5000", available: false, available2: false, available3: false, available4: false, available5: false, available6: false, available7: false, available8: false, available9: false, available10: false, available11: false, available12: false, available13: false, available14: false, available15: false, available16: false, available17: false, available18: false },
      { Series: "6000", available: false, available2: false, available3: false, available4: false, available5: false, available6: false, available7: false, available8: false, available9: false, available10: false, available11: false, available12: false, available13: false, available14: false, available15: false, available16: false, available17: false, available18: false },
      { Series: "7000", available: false, available2: false, available3: false, available4: false, available5: false, available6: false, available7: false, available8: false, available9: false, available10: false, available11: false, available12: false, available13: false, available14: false, available15: false, available16: false, available17: false, available18: false },
      { Series: "8000", available: false, available2: false, available3: false, available4: false, available5: false, available6: false, available7: false, available8: false, available9: false, available10: false, available11: false, available12: false, available13: false, available14: false, available15: false, available16: false, available17: false, available18: false },
      { Series: "9000", available: false, available2: false, available3: false, available4: false, available5: false, available6: false, available7: false, available8: false, available9: false, available10: false, available11: false, available12: false, available13: false, available14: false, available15: false, available16: false, available17: false, available18: false },
      { Series: "10000", available: false, available2: false, available3: false, available4: false, available5: false, available6: false, available7: false, available8: false, available9: false, available10: false, available11: false, available12: false, available13: false, available14: false, available15: false, available16: false, available17: false, available18: false },
      { Series: "11000", available: false, available2: false, available3: false, available4: false, available5: false, available6: false, available7: false, available8: false, available9: false, available10: false, available11: false, available12: false, available13: false, available14: false, available15: false, available16: false, available17: false, available18: false },
      { Series: "100", available: false, available2: false, available3: false, available4: false, available5: false, available6: false, available7: false, available8: false, available9: false, available10: false, available11: false, available12: false, available13: false, available14: false, available15: false, available16: false, available17: false, available18: false },
      { Series: "100", available: false, available2: false, available3: false, available4: false, available5: false, available6: false, available7: false, available8: false, available9: false, available10: false, available11: false, available12: false, available13: false, available14: false, available15: false, available16: false, available17: false, available18: false },
      { Series: "100", available: false, available2: false, available3: false, available4: false, available5: false, available6: false, available7: false, available8: false, available9: false, available10: false, available11: false, available12: false, available13: false, available14: false, available15: false, available16: false, available17: false, available18: false },
      { Series: "100", available: false, available2: false, available3: false, available4: false, available5: false, available6: false, available7: false, available8: false, available9: false, available10: false, available11: false, available12: false, available13: false, available14: false, available15: false, available16: false, available17: false, available18: false },
      { Series: "100", available: false, available2: false, available3: false, available4: false, available5: false, available6: false, available7: false, available8: false, available9: false, available10: false, available11: false, available12: false, available13: false, available14: false, available15: false, available16: false, available17: false, available18: false },
      { Series: "100", available: false, available2: false, available3: false, available4: false, available5: false, available6: false, available7: false, available8: false, available9: false, available10: false, available11: false, available12: false, available13: false, available14: false, available15: false, available16: false, available17: false, available18: false }
    ];
  }

  onClickingMe(value) {

    var htcontents = JSON.stringify(this.hot.getSourceData());
    console.log(htcontents);
  }


}
