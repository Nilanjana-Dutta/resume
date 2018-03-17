import { Component, OnInit } from '@angular/core';
import { Cv} from '../../models/Cv';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {

  cvs:Cv[];
  showExtended:boolean = false;
  enableAdd:boolean = true;
  loaded: boolean = false;//is done while using http,making an httprequest and getting the calls back 
  
  currentStyles = {};
  constructor() { }

  ngOnInit() {
        this.cvs=[
        {
           name:'Programming Skills',
           
            skills: {
             skill1:'Angular 5',
             skill2:'JQuery',
             skill3:'Javascript',
             skill4:'html',
             skill5:'css',
             skill6:'bootstrap'
           },

           name1:'Experience',
           sec1:{
             profile1:'web developer',
             workplace1:'wipro technologies',
            duration1:'20th October,2014 - 31st October,2017',
            description1:'Lorem ipsum dolor sit amet, consectetur adipiscingVivamus sit amet ligula non lectus cursus egestas. Cras erat lorem, fringilla quis sagittis in, sagittis inNam leo tortor Nam leo tortor Vivamus.'
           },
           image:"http://demo.flexy-codes.com/FlexyVcard/images/img-profile/about_1.jpg",
           isActive:true,
          registered:new Date('01/02/2018 08:30:00')
         },
         {
           name:'Design Skills',
           
            skills: {
             skill1:'Photoshop',
             skill2:'HTML5',
             skill3:'CSS3',
             skill4:'Flash',
             skill5:'Illustrator',
             skill6:'bootstrap'
           },
           sec1:{
            profile1:'Web Developer',
            workplace1:'Nexteon IT Solutions',
            duration1:'5th March,2018-present',
            description1:'Lorem ipsum dolor sit amet, consectetur adipiscingVivamus sit amet ligula non lectus cursus egestas. Cras erat lorem, fringilla quis sagittis in, sagittis inNam leo tortor Nam leo tortor Vivamus.'
          },
           image:"http://demo.flexy-codes.com/FlexyVcard/images/img-profile/about_2.png",
           isActive:true,
           //balance: 200,
           registered:new Date('01/02/2018 08:30:00')
         },
         {
           name:'Office Skills',
           
            skills: {
             skill1:'Angular 5',
             skill2:'JQuery',
             skill3:'Javascript',
             skill4:'Node.Js',
             skill5:'Typescript',
             skill6:'bootstrap'
           },
           name1:'EDUCATION',
           sec1:{
             profile1:'Bachelor of Engineering',
             workplace1:'Siddaganga Institute of technologies,Tumkur',
            duration1:'25th July,2010 - 3rd August,2014',
            description1:'Lorem ipsum dolor sit amet, consectetur adipiscingVivamus sit amet ligula non lectus cursus egestas. Cras erat lorem, fringilla quis sagittis in, sagittis inNam leo tortor Nam leo tortor Vivamus.'
           },
           image:"http://demo.flexy-codes.com/FlexyVcard/images/img-profile/about_3.png",
           isActive:true,
          registered:new Date('05/02/2018 11:30:55')
         },
         {
           name:'Hobbies Skills',
           
            skills: {
             skill1:'Angular 5',
             skill2:'JQuery',
             skill3:'Javascript',
             skill4:'html',
             skill5:'css',
             skill6:'bootstrap'
           },
           name1:'AWARDS',
           sec1:{
             profile1:'AngularJS',
             workplace1:'Coursera',
            duration1:'25th July,2016 - 31st March,2016',
            description1:'Lorem ipsum dolor sit amet, consectetur adipiscingVivamus sit amet ligula non lectus cursus egestas. Cras erat lorem, fringilla quis sagittis in, sagittis inNam leo tortor Nam leo tortor Vivamus.'
           },
           image:"http://demo.flexy-codes.com/FlexyVcard/images/img-profile/about_1.jpg",
           isActive:true,
          registered:new Date('01/01/2018 09:35:00')
         },
         {
           name:'Language Skills',
           
            skills: {
             skill1:'Angular 5',
             skill2:'JQuery',
             skill3:'Javascript',
             skill4:'html',
             skill5:'css',
             skill6:'bootstrap'
           },
           sec1:{
            profile1:'Node.JS',
            workplace1:'MongoDB University',
           duration1:'20th March - present',
           description1:'Lorem ipsum dolor sit amet, consectetur adipiscingVivamus sit amet ligula non lectus cursus egestas. Cras erat lorem, fringilla quis sagittis in, sagittis inNam leo tortor Nam leo tortor Vivamus.'
          },
           image:"http://demo.flexy-codes.com/FlexyVcard/images/img-profile/about_3.png",
           isActive:true,
          registered:new Date('02/03/2018 08:30:00')
          }
       ];
       
       this.loaded = true;
       
       this.setCurrentStyles();
  }

  addCv(cv:Cv){
    this.cvs.push(cv);
  }

  


  setCurrentStyles(){
    this.currentStyles = {
      'padding-top':this.showExtended ? '0' : '40px',
      'font-size': this.showExtended ? '' : '40px'
    }
  }

  fireEvent(e){
    console.log(e.type);
  }
}
