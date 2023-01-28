import { Component } from "react";

class Carousel extends Component {
  state = {
    active: 0,
  };

  static defaultProps = {
    images: ["http://pets-images.dev-apis.com/pets/none.jpg"],
  };

  handleIndexClick = (event) => {
    this.setState({
      active: +event.target.dataset.index,
    });
  };

  render() {
    // throw new Error("Error!!!");
    const { active } = this.state;
    const { images } = this.props;
    return (
      <div className="mt-3 flex h-96 justify-around align-middle">
        <img
          src={images[active]}
          alt="animal"
          className="max-w-96 max-h-96 rounded-md"
        />
        <div className="w-6/12">
          {images.map((photo, index) => (
            // eslint-disable-next-line
            <img
              onClick={this.handleIndexClick}
              data-index={index}
              key={photo}
              src={photo}
              className={
                index === active
                  ? "w-2h-32 m-4 inline-block h-32 cursor-pointer rounded-full border-4 border-black opacity-60"
                  : "w-2h-32 m-4 inline-block h-32 cursor-pointer rounded-full border-2 border-gray-400"
              }
              alt="animal thumbnail"
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Carousel;
