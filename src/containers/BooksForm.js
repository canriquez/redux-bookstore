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

  handleChange(event) {
    this.setState({
      title: event.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    let select =  document.getElementById('category').value;
    this.setState({
      category: select,
    });
    setTimeout(() => {console.log(this.state)}, 200);
  }

  render () {
    return (
      <form action="#" onSubmit={this.handleSubmit}>
        <input type="text" onChange={this.handleChange} value={this.state.title}/>
        <select name="category" id="category" >
          {
                      this.categories.map((cat, id) => (
                        <option key={`opt_${id * 2}`} value={id}>{cat}</option>
                      ))
                  }
        </select>
        <button type="button">Add Book</button>
      </form>

    );
  }
};

export default BooksForm;
