export const fetchData = () => async (dispatch) => {
  try {
    dispatch({ type: "dataRequest" });

    const response = await fetch(
      "https://api.quicksell.co/v1/internal/frontend-assignment"
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    dispatch({ type: "ticketSuccess", payload: data });
  } catch (error) {
    dispatch({ type: "ticketFailure" });
  }
};

export const dataSelect = (group, tickets, order) => async (dispatch) => {
  try {
    dispatch({ type: "ticketSelectRequest" });

    let user = false;
    let set = new Set();
    let array = [];
    let ticketSelected = [];

    if (group === "status") {
      tickets.forEach((element) => {
        set.add(element.status);
      });

      array = [...set];

      array.forEach((element, index) => {
        let array = tickets.filter((filterElement) => {
          return element === filterElement.status;
        });
        ticketSelected.push({
          [index]: {
            title: element,
            value: array,
          },
        });
      });
    } else if (group === "user") {
      user = true;
      tickets?.users?.forEach((element, index) => {
        array = tickets?.tickets?.filter((filterElement) => {
          return element.id === filterElement.userId;
        });

        ticketSelected.push({
          [index]: {
            title: element.name,
            value: array,
          },
        });
      });
    } else {
      let priorityList = ["No priority", "Low", "Medium", "High", "Urgent"];

      priorityList.forEach((element, index) => {
        array = tickets.filter((filterElement) => {
          return index === filterElement.priority;
        });

        ticketSelected.push({
          [index]: {
            title: element,
            value: array,
          },
        });
      });

      if (order === "title") {
        ticketSelected.forEach((element, index) => {
          const valueArray = element[index]?.value;
          if (Array.isArray(valueArray)) {
            valueArray.sort((a, b) => a.title.localeCompare(b.title));
          }
        });
      }
    }

    if (order === "priority") {
      ticketSelected.forEach((element, index) => {
        const valueArray = element[index]?.value;
        if (Array.isArray(valueArray)) {
          valueArray.sort((a, b) => b.priority - a.priority);
        }
      });
    }

    dispatch({ type: "ticketSelectSuccess", payload: { ticketSelected, user } });
  } catch (error) {
    dispatch({ type: "ticketSelectFailure", payload: error.message });
  }
};
