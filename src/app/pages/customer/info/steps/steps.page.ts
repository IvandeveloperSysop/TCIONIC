import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ApiLaravelService } from 'src/app/services/api-laravel.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-steps',
  templateUrl: './steps.page.html',
  styleUrls: ['./steps.page.scss'],
})
export class StepsPage implements OnInit {

  instructions;
  products = [
    {'name' : 'AGUA MINERAL' , 'marca' : 'TOPO CHICO', 'producto' : 'AGUA MINERAL NR', 'cantidad' : '600 ML'},
    {'name' : 'AGUA MINERAL' , 'marca' : 'TOPO CHICO', 'producto' : 'AGUA MINERAL NR', 'cantidad' : '1.5L NR'},
    {'name' : 'AGUA MINERAL' , 'marca' : 'TOPO CHICO', 'producto' : 'HARD SELTZER LEMON LIME', 'cantidad' : '355 ML'},
    {'name' : 'AGUA MINERAL' , 'marca' : 'TOPO CHICO', 'producto' : 'HARD SELTZER PINEAPPLE', 'cantidad' : '355 ML'},
    {'name' : 'AGUA MINERAL' , 'marca' : 'TOPO CHICO', 'producto' : 'HARD SELTZER STRAWBERRY GUAVA', 'cantidad' : '355 ML'},
    {'name' : 'AGUA MINERAL' , 'marca' : 'TOPO CHICO', 'producto' : 'HARD SELTZER MANGO', 'cantidad' : '355 ML'},
    {'name' : 'AGUA MINERAL', 'marca' : 'TOPO CHICO', 'producto' : 'TWIST TORONJA', 'cantidad' : '600 ML '},
    {'name' : 'AGUA MINERAL', 'marca' : 'TOPO CHICO', 'producto' : 'TWIST LIMON', 'cantidad' : '600 ML '},
    {'name' : 'AGUA MINERAL', 'marca' : 'TOPO CHICO', 'producto' : 'SAGRIA', 'cantidad' : '600 ML'},
    {'name' : 'AGUA MINERAL', 'marca' : 'TOPO CHICO', 'producto' : 'SAGRIA LIGHT', 'cantidad' : '600 ML'}
  ];


  imagePath = '';
  videoPath: SafeResourceUrl;


  sliderOpts = {
    zoom: {
      maxRatio: 2
    }
  };

  constructor(private servicesApi: ApiLaravelService, 
              private sanitizer: DomSanitizer,
              private route: ActivatedRoute,) {
  }
  
  async ionViewWillEnter(){
    this.servicesApi.getImageAward('steps').subscribe( resp => {
      console.log(resp)
      // this.imagePath = resp['imagePath'];
      this.videoPath = this.sanitizer.bypassSecurityTrustResourceUrl(resp['videoPath']);
    });

  }

  ngOnInit() {
    if(this.route.snapshot.paramMap.get('instructions')){
      this.instructions = this.route.snapshot.paramMap.get('instructions');
    }else{
      this.instructions = 'ticket';
    }
  }

}
