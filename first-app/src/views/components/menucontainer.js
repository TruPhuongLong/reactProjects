import React from 'react';
import {MenuButton} from './menubutton';
import {Menu} from './menu';

export class MenuContainer extends React.Component{
   state = {
       visible: false
   }

   toggleMenu = () => {
       this.setState(preState => ({
           visible: !preState.visible
       }))
   }

   handleMouseDown = e => {
       this.toggleMenu();
       e.stopPropagation();
   }

   render(){
       return (
           <div>
               <MenuButton handleMouseDown={this.handleMouseDown}/>
               <Menu menuVisible={this.state.visible} handleMouseDown={this.handleMouseDown}/>
           </div>
       )
   }
}