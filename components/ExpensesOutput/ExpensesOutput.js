import { StyleSheet, View } from "react-native";

import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";
import { GlobalStyles } from "../../constants/styles";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    description: "Nikes",
    amount: 29.99,
    date: new Date("2023-12-22"),
  },
  {
    id: "e2",
    description: "Chucks",
    amount: 39.99,
    date: new Date("2023-12-22"),
  },
  {
    id: "e3",
    description: "Doc Martens",
    amount: 59.99,
    date: new Date("2023-12-22"),
  },
  {
    id: "e4",
    description: "Shein",
    amount: 25.99,
    date: new Date("2023-12-22"),
  },
  {
    id: "e5",
    description: "Earrings",
    amount: 120.99,
    date: new Date("2023-12-22"),
  },
  {
    id: "e6",
    description: "Nikes",
    amount: 29.99,
    date: new Date("2023-12-22"),
  },
  {
    id: "e7",
    description: "Chucks",
    amount: 39.99,
    date: new Date("2023-12-22"),
  },
  {
    id: "e8",
    description: "Doc Martens",
    amount: 59.99,
    date: new Date("2023-12-22"),
  },
];

export default function ExpensesOutput({ expenses, expensesPeriod }) {
  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod} />
      <ExpensesList expenses={DUMMY_EXPENSES} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 0,
    backgroundColor: GlobalStyles.colors.primary0,
  },
});
