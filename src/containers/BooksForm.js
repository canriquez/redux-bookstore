import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { randomId } from '../helpers/help';
import { createApiBook, getApiBookList } from '../actions/index';

class BooksForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      category: '',
    };

    this.categories = [
      'Category',
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
    // this.mapDispatchToProps = this.mapDispatchToProps.bind(this);
  }

  handleChange() {
    const formTitle = document.getElementById('inputValue').value;
    const select = document.getElementById('category').value;
    this.setState({
      title: formTitle,
      category: this.categories[select],
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { onSubmitCreateBook } = this.props;
    const { title, category } = this.state;
    if (title === '' || category === 'Category') { return; }

    const book = {
      ...this.state,
      id: randomId(),
    };
    onSubmitCreateBook(book);
  }

  render() {
    const { title } = this.state;
    return (
      <div className="form-block">
        <div className="form-title">
          add new book
        </div>
        <form action="#" onSubmit={this.handleSubmit}>
          <input className="inputValue" type="text" onChange={this.handleChange} value={title} id="inputValue" placeholder="Book title" />
          <select className="category" name="category" id="category" onChange={this.handleChange}>
            {
              this.categories.map((cat, id) => (
                <option key={`opt_${id * 2}`} value={id}>{cat}</option>
              ))
            }
          </select>
          <button id="submit-btn" className="Rectangle-2 submit-btn base-button" type="submit"><p>Add Book</p></button>
        </form>
      </div>
    );
  }
}

BooksForm.propTypes = {
  onSubmitCreateBook: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  onSubmitCreateBook: book => {
    // eslint-disable-next-line
    dispatch(createApiBook(book)).then(response => {
      dispatch(getApiBookList());
    }) // dispatch with thunk function
      .catch(err => {
        throw ('Something went wrong with API Storing Book ', err);
      });

    // dispatch(addBook(book));
  },
});

export default connect(null, mapDispatchToProps)(BooksForm);
