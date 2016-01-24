var Title = React.createClass({
  render: function() {
    return (
      <h3>Aim of this project</h3>
    );
  }
});

var Paragraph = React.createClass({
  render: function() {
    return (
      <p>
        To lounch original web service, to be a fullstack engineer.<br/>
        There are many technology factors to lounch web sites.<br/>
        However, what about my skill?<br/>
        I'm a serverside engineer for 2 years.<br/>
        I created enterprise applications by using JavaEE.<br/>
        I acquired Java/Scala/Ruby or frameworks related them.<br/>
        But, my weakness is lack of frontend engineering skill.<br/>
        Through this project, I will acquire frontend(HTML/CSS/Javascript) engineering skill.<br/>
      </p>
    );
  }
});

var Sentence = React.createClass({
  render: function() {
    return (
      <div className="sentence">
        <Title />
        <Paragraph />
      </div>
    );
  }
});

ReactDOM.render(
  <Sentence />,
  document.getElementById('main')
 );
