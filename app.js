
class Website extends React.Component{
    render() {
        return (
            <div id="WebsiteVistors" >
            <h2>Website Vistors</h2>
            <h3>821</h3>
            <div id="nestedBox" ></div>
             </div>
        )
    }
}



class Average extends React.Component{
    render(){
        return (
           <div id= "AverageRating">
               <h2>Average Rating</h2>
               </div>
        )
    }
}



class Sentiment extends React.Component{
        render(){
            return(
                <div id= "Sentiment">
                    <h2>Sentiment Analysis</h2>
                </div>
            )
        }
}




class Reviews extends React.Component{
    render(){
        return(
            <div id= "Reviews">
            <h2>Reviews</h2>
            <h3>1,281</h3
            ></div>
        )
        
    }
}

 class SideBar extends React.Component {
    render() {
      return (
        <div id="SideBar">
            
            <h2>Dashboard</h2>
            <h2>Widget</h2>
            <h2>Reviews</h2>
            <h2>Customers</h2>
            <h2>Online Analysis</h2>
            <h2>Settings</h2>
            
            </div>
      )
    }
  }


class App extends React.Component {
    render() {
      return (
        <h1>Commence Dashboard Creation!</h1>
      )
    }
  }

 ReactDOM.render(
     <div id="container">
         <SideBar/>
         <Reviews/>
         <Average/>
         <Sentiment/>
         <Website/>
             </div>,

 
 document.getElementById('container'))
 