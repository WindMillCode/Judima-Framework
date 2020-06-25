import {   Component, OnInit,Input,ViewChildren,AfterViewInit,Inject, OnDestroy,ChangeDetectorRef,ChangeDetectionStrategy,AfterContentInit } from '@angular/core';
import {   RyberService   } from '../ryber.service';
import {   fromEvent,interval, of,from, Observable,merge, Subject, combineLatest } from 'rxjs';
import {   catchError,take,timeout,mapTo, debounceTime,distinctUntilChanged, debounce,first, ignoreElements    } from 'rxjs/operators';
import {   zChildren,getTextWidth,numberParse,
    xPosition,resize,componentBootstrap,deltaNode,
    eventDispatcher,dropdown,dragElement,stack,xContain,minMaxDelta,
    objectCopy,responsiveMeasure
} from '../customExports'


@Component({
  selector: 'app-heading',
  templateUrl: '../template.component.html',
  styleUrls: ['./heading.component.css'], // useful we dont need to repeat ourcless in ngCss
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeadingComponent implements OnInit  , AfterViewInit, OnDestroy {

    @ViewChildren('myVal') headingMyElements: any; 

    constructor(
        public ryber: RyberService,
        private ref: ChangeDetectorRef
    ) { }
    
    @Input() appTV:string | any;
    typesES:string = 'headingES'
    CONumber:Generator = (function(){
        return function *generator() {
            var index = 0;
            while (true)
            yield index++;
        }()
    })()    
    

    ngOnInit():void {
        console.log(this.appTV+ 'ngOnInit fires on mount')
    }

    ngAfterViewInit(): void {
        console.log( this.appTV+ 'ngAfterViewInit fires one remount') 
        this.ryber.formLoadEvent$ = fromEvent(window,'load')
        this.ryber.formResizeEvent$ = fromEvent(window,'resize')


/*0  */if(this.appTV === 'formCO'+ this.CONumber.next().value){


            let zChild = this.zChildInit()
            console.log(zChild)

            // drags elements for you 
                //remove when done
                let toPlace = Object.keys(zChild)
                .filter((x,i)=>{  return x.match("&#") !== null })
                .slice(2)
                // console.log(toPlace)
                toPlace
                .forEach((x,i)=>{
                    dragElement(zChild[x].element)
                })
            //

            // highlights
            Array.from(Array(2),(x,i)=> {return "&#" +(8354 + i)})
            .forEach((x,i)=>{
                // zChild[x].css["background-color"]= "red"
            })
            // this.ref.detectChanges()
            //            

             
                        
            this.ryber.appEvents({
                typesES:this.typesES,
                event:'resize',
                of:(
                    this.ryber.formCO10.metadata[this.appTV] !== undefined ? 
                    this.ryber.formCO10.metadata[this.appTV] :
                    this.ryber.formResizeEvent$ 
                )
                // .pipe()
                .subscribe(()=>{ 

                    
                    

                    console.log(numberParse(getComputedStyle(zChild["&#8353"].element).width))

                    if(   numberParse(getComputedStyle(zChild["&#8353"].element).width) > 900   ){
                        
                        //static element management
                        {
                            // functionality 
                            {

                                //clean up

                                //
                            }
                            //

                            //position 
                            {

                            }
                            //

                            //moving 
                            {

                            }
                            //
                        }
                        //

                        //dynamic element management
                        {
                            // functionality 
                            {

                            }
                            //

                            //position 
                            {

                            }
                            //

                            //moving 
                            {

                            }
                            //
                        }
                        //                        


                    }


                    else if(    numberParse(getComputedStyle(zChild["&#8353"].element).width) > 0  ){
                        

                        //static element management
                        {
                            // functionality 
                            {

                                
                                //clean up

                                //
                            }
                            //

                            //position 
                            {

                            }
                            //

                            //moving 
                            {

                            }
                            //
                        }
                        //

                        //dynamic element management
                        {
                            // functionality 
                            {

                            }
                            //

                            //position 
                            {

                            }
                            //

                            //moving 
                            {

                            }
                            //
                        }
                        //
                        
                        
                    }                    
                    

                    // so you wont have to find the panel
                    scrollTo(0,numberParse(getComputedStyle(zChild["&#8353"].element).top)-30)
                    // 

                    // this.ryber[this.appTV].metadata.formCO10.next({
                    //     boardTop:zChild["&#8353"].css["top"],
                    //     boardHeight:zChild["&#8353"].css["height"]
                    // })                       

                })
            })
            
            
        }

        this.ryber.appViewComplete.next(
            (function(qq){
                qq.ryber.appViewCompleteArray.push(   qq.appTV   )
            })(this)
        )         
    }    

    ngOnDestroy(): void {
        console.log(this.appTV+ '  ngOnDestroy fires on dismount')
    }
    
    private zChildInit(devObj?): any {
        return componentBootstrap({
            appTV: this.appTV,
            myElements: this.headingMyElements._results,
            ryber: this.ryber,
            zProps: {
                extras: 'true',
                val:'true'
            }
        });
    }    

}







