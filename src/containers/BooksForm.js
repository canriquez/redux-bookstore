import React from 'react';

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
    if (this.state.title === '' || this.state.category === '') { return }
    console.log('Valid Submit hit')

    setTimeout(() => { console.log(this.state) }, 200);
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

export default BooksForm;
