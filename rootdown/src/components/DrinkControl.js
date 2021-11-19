import React from "react";
import DrinkList from "./DrinkList";
import DrinkDetail from "./DrinkDetail";

const mainDrinkList = [
  {
    name: "BeetleJuice",
    price: "5",
    description: "Who has two thumbs and enjoys a fresh pint of beet juice? If you just pointed your thumbs at yourself then you do! Served at room temperature with a hollowed out Slim Jim for a straw.",
    pints: 124,
    id: "1"
  },
  {
    name: "20/20",
    price: "5",
    description: "Carrots: Nature's earplugs. Well we've taken that technology and liquified it so you can enjoy the sweet, sweet taste of silence that comes from knowing no one will ever talk to person who talks to carrots. Shot of Mad Dog available upon request.",
    pints: 5,
    id:  "2"
  }
];

class DrinkControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainDrinkList: mainDrinkList,
      selectedDrink: null,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => {
    if (this.state.selectedDrink != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedDrink: null,
      });
    } else {
      this.setState((prevState) => ({
        formVisibleOnpage: !prevState.formVisibleOnPage,
      }));
    }
  };

  handleChangingSelectedDrink = (id) => {
    const selectedDrink = this.state.mainDrinkList.filter(
      (drink) => drink.id === id
    )[0];
    this.setState({ selectedDrink: selectedDrink });
  };

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.state.selectedDrink != null) {
      currentlyVisibleState = (
        <DrinkDetail
          drink={this.state.selectedDrink}
        />
      );
      buttonText = "Return to Drink List";
    // } else if (this.state.formVisibleOnPage) {
    //   currentlyVisibleState = (
    //     <NewDrinkForm onNewDrinkCreation={this.handleAddingNewDrinkToList} />
    //   );
    //   buttonText = "Return to Drink List";
    } else {
      currentlyVisibleState = (
        <DrinkList
          drinkList={this.state.mainDrinkList}
          onDrinkSelection={this.handleChangingSelectedDrink}
        />
      );
      buttonText = "Add Drink";
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>{" "}
      </React.Fragment>
    );
  }
}

export default DrinkControl;