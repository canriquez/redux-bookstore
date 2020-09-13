import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { randomId } from '../helpers/help';
import { addBook } from '../actions/index';

class BooksForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      category: '',
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
    if (title === '' || category === 'Select Category') { return; }

    const book = {
      ...this.state,
      id: randomId(),
    };
    onSubmitCreateBook(book);
  }

  render() {
    const { title } = this.state;
    return (
      <form action="#" onSubmit={this.handleSubmit}>
        <input type="text" onChange={this.handleChange} value={title} id="inputValue" />
        <select name="category" id="category" onChange={this.handleChange}>
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
}

BooksForm.propTypes = {
  onSubmitCreateBook: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispach => ({
  onSubmitCreateBook: book => {
    dispach(addBook(book));
  },
});

export default connect(null, mapDispatchToProps)(BooksForm);
