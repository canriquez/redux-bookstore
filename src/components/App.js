import React from 'react';
import BooksList from '../containers/BooksList';
import BooksForm from '../containers/BooksForm';
import { getApiBookList } from '../actions/index'
import { connect } from 'react-redux';


const App = ({
  readApiBookList //render complete and actual book list from API
  })=> {

  
  readApiBookList();

  return (
    <div className="panel">
      <div className="panel-bg">
        <span className="title-header">Bookstore CMS</span>
        <p className="books">books</p>
        <p />
        <i className="login" />
      </div>
      <BooksList />
      <BooksForm />
    </div>
  )
  };


const mapDispatchToProps = dispatch => {
  return {
    readApiBookList: ()=>dispatch(getApiBookList())
  }
}

//export default App;
export default connect(null,mapDispatchToProps)(App)
