import React from "react";

const IngredientList = ({ ingredients }) => {
  return (
    <table>
      <tbody>
        {ingredients.map((ingredient) => {
          const { _id: id, isGroup, name, amount, amountUnit } = ingredient;

          if (isGroup) {
            return (
              <tr key={id}>
                <td colSpan={3} textAlign="center">
                  {name}
                </td>
              </tr>
            );
          }

          return (
            <tr key={id}>
              <td width="20%" textAlign="right">
                {this.getAmount(amount)}
              </td>
              <td width="10%">{amountUnit}</td>
              <td>{name}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
export default IngredientList;
