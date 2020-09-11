import React from 'react';
import { randomId } from '../helpers/help';
import { addBook } from '../actions/index'
import { connect } from 'react-redux';

class BooksForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      category: ''
    };

    this.categories = [
      'Select Category',
      'Action',
      'Biography',
      'History',
      'Horror',
      'Kids',
      'Learning',
      'Sci-Fi',
    ];

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    //this.mapDispatchToProps = this.mapDispatchToProps.bind(this);
  }



  handleChange(e) {
    let formTitle = document.getElementById('inputValue').value;
    let select = document.getElementById('category').value;
    this.setState({
      title: formTitle,
      category: this.categories[select]
    });
    setTimeout(() => { console.log(this.state) }, 200);
  }


  handleSubmit(e) {
    e.preventDefault();
    const { onSubmitCreateBook } = this.props;
    if (this.state.title === '' || this.state.category === '') { return }
    console.log('Valid Submit hit')
    setTimeout(() => { console.log(this.state) }, 200);

    const book = {
      ...this.state,
      id: randomId()
    }
    onSubmitCreateBook(book)

  }

  render() {
    return (
      <form action="#" onSubmit={this.handleSubmit} >
        <input type="text" onChange={this.handleChange} value={this.state.title} id="inputValue" />
        <select name="category" id="category" onChange={this.handleChange} >
          {
            this.categories.map((cat, id) => (
              <option key={`opt_${id * 2}`} value={id}>{cat}</option>
            ))
          }
        </select>
        <button type="submit">Add Book</button>
      </form>

    );
  }
};

const mapDispatchToProps = (dispach) => {
  return {
    onSubmitCreateBook: (book) => {
      dispach(addBook(book))
    }
  }
}


export default connect(
  null,
  mapDispatchToProps
)(BooksForm);
