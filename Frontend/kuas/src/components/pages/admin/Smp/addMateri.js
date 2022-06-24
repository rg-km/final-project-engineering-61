import React from "react";

class AddMateri extends React.Component {
  state = {
    nama: "",bab1: "", materi1: "", bab2: "", materi2: "",bab3: "", materi3: "",bab4: "", materi4: "",bab5: "", materi5: "",
    bab6: "", materi6: "",bab7: "", materi7: "",bab8: "", materi8: "",bab9: "", materi9: "",bab10: "", materi10: "",
  };

  add = (e) => {
    e.preventDefault();
    if (this.state.nama === "" || this.state.bab1 === "" || 
        this.state.materi1 === "" || this.state.bab2 === "" ||
        this.state.materi2 === "" || this.state.bab3 === "" ||
        this.state.materi3 === "" ) 
    {
      alert("ALl the fields are mandatory!");
      return;
    }
    this.props.addMateriHandler(this.state);
    this.setState({nama: "",bab1: "", materi1: "", bab2: "", materi2: "",bab3: "", materi3: "",bab4: "", materi4: "",bab5: "", materi5: "",
    bab6: "", materi6: "",bab7: "", materi7: "",bab8: "", materi8: "",bab9: "", materi9: "",bab10: "", materi10: "" });
    this.props.history.push("/");
  };
  render() {
    return (
      <div className="ui main">
        <h2>Tambah Materi</h2>
        <form className="ui form" onSubmit={this.add}>
          <div className="field">
            <label>Nama</label>
            <input
              type="text"
              name="nama"
              placeholder="Nama"
              value={this.state.nama}
              onChange={(e) => this.setState({ nama: e.target.value })}
            />
          </div>
          <div className="field">
            <label>Bab 1</label>
            <input
              type="text"
              name="bab"
              placeholder="Bab"
              value={this.state.bab1}
              onChange={(e) => this.setState({ bab1: e.target.value })}
            />
          </div>
          <div className="field">
            <label>Materi 1</label>
            <input
              type="text"
              name="materi1"
              placeholder="Materi1"
              value={this.state.materi1}
              onChange={(e) => this.setState({ materi1: e.target.value })}
            />
          </div>
          <div className="field">
            <label>Bab 2</label>
            <input
              type="text"
              name="bab2"
              placeholder="Bab2"
              value={this.state.bab2}
              onChange={(e) => this.setState({ bab2: e.target.value })}
            />
          </div>
          <div className="field">
            <label>Materi 2</label>
            <input
              type="text"
              name="materi2"
              placeholder="Materi2"
              value={this.state.materi2}
              onChange={(e) => this.setState({ materi2: e.target.value })}
            />
          </div>
          <div className="field">
            <label>Bab 3</label>
            <input
              type="text"
              name="bab3"
              placeholder="Bab3"
              value={this.state.bab3}
              onChange={(e) => this.setState({ bab3: e.target.value })}
            />
          </div>
          <div className="field">
            <label>Materi 3</label>
            <input
              type="text"
              name="materi3"
              placeholder="Materi3"
              value={this.state.materi3}
              onChange={(e) => this.setState({ materi3: e.target.value })}
            />
          </div>
          <div className="field">
            <label>Bab 4</label>
            <input
              type="text"
              name="bab4"
              placeholder="Bab4"
              value={this.state.bab4}
              onChange={(e) => this.setState({ bab4: e.target.value })}
            />
          </div>
          <div className="field">
            <label>Materi 4</label>
            <input
              type="text"
              name="materi4"
              placeholder="Materi4"
              value={this.state.materi4}
              onChange={(e) => this.setState({ materi4: e.target.value })}
            />
          </div>
          <div className="field">
            <label>Bab 5</label>
            <input
              type="text"
              name="bab5"
              placeholder="Bab5"
              value={this.state.bab5}
              onChange={(e) => this.setState({ bab5: e.target.value })}
            />
          </div>
          <div className="field">
            <label>Materi 5</label>
            <input
              type="text"
              name="materi5"
              placeholder="Materi5"
              value={this.state.materi5}
              onChange={(e) => this.setState({ materi5: e.target.value })}
            />
          </div>
          <div className="field">
            <label>Bab 6</label>
            <input
              type="text"
              name="bab6"
              placeholder="Bab6"
              value={this.state.bab6}
              onChange={(e) => this.setState({ bab6: e.target.value })}
            />
          </div>
          <div className="field">
            <label>Materi 6</label>
            <input
              type="text"
              name="materi6"
              placeholder="Materi6"
              value={this.state.materi6}
              onChange={(e) => this.setState({ materi6: e.target.value })}
            />
          </div>
          <div className="field">
            <label>Bab 7</label>
            <input
              type="text"
              name="bab7"
              placeholder="Bab7"
              value={this.state.bab7}
              onChange={(e) => this.setState({ bab7: e.target.value })}
            />
          </div>
          <div className="field">
            <label>Materi 7</label>
            <input
              type="text"
              name="materi7"
              placeholder="Materi7"
              value={this.state.materi7}
              onChange={(e) => this.setState({ materi7: e.target.value })}
            />
          </div>
          <div className="field">
            <label>Bab 8</label>
            <input
              type="text"
              name="bab8"
              placeholder="Bab8"
              value={this.state.bab8}
              onChange={(e) => this.setState({ bab8: e.target.value })}
            />
          </div>
          <div className="field">
            <label>Materi 8</label>
            <input
              type="text"
              name="materi8"
              placeholder="Materi8"
              value={this.state.materi8}
              onChange={(e) => this.setState({ materi8: e.target.value })}
            />
          </div>
          <div className="field">
            <label>Bab 9</label>
            <input
              type="text"
              name="bab9"
              placeholder="Bab9"
              value={this.state.bab9}
              onChange={(e) => this.setState({ bab9: e.target.value })}
            />
          </div>
          <div className="field">
            <label>Materi 9</label>
            <input
              type="text"
              name="materi9"
              placeholder="Materi9"
              value={this.state.materi9}
              onChange={(e) => this.setState({ materi9: e.target.value })}
            />
          </div>
          <div className="field">
            <label>Bab 10</label>
            <input
              type="text"
              name="bab10"
              placeholder="Bab10"
              value={this.state.bab10}
              onChange={(e) => this.setState({ bab10: e.target.value })}
            />
          </div>
          <div className="field">
            <label>Materi 10</label>
            <input
              type="text"
              name="materi10"
              placeholder="Materi10"
              value={this.state.materi10}
              onChange={(e) => this.setState({ materi10: e.target.value })}
            />
          </div>
          <button className="ui button blue">Add</button>
        </form>
      </div>
    );
  }
}

export default AddMateri;
