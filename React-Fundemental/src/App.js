import logo from "./logo.svg";
import "./App.css";
import { Great } from "./components/Greet";
import Welcome from "./components/Welcome";
import Message from "./components/Message";
import Counter from "./components/Counter";
import FunctionalClick from "./components/FunctionalClick";
import ClassClick from "./components/ClassClick";
import EventBind from "./components/EventBind";
import ParentComponent from "./components/ParentComponent";
import UserGreeting from "./components/UserGreeting";
import NameList from "./components/NameList";
import Form from "./components/Form";
import StyleSheet from "./components/StyleSheet";
import Inline from "./components/Inline";
import "./myStyles.css";
import styles from "./myStyles.module.css";
import LifeCycleA from "./components/LifeCycleA";
import FragementDemo from "./components/FragementDemo";
import Table from "./components/Table";
import PureComp from "./components/PureComp";
import ParentComp from "./components/ParentComp";
import RefsDemo from "./components/RefsDemo";
import FocusInput from "./components/FocusInput";
import FRParentInput from "./components/FRParentInput";
import PrtalDemo from "./components/prtalDemo";
import Hero from "./components/Hero";
import ErrorBoundary from "./components/ErrorBoundary";
import ClickCounter from "./components/ClickCounter";
import HoverCounter from "./components/HoverCounter";
import ClickCounterTwo from "./components/ClickCounterTwo";
import HoverCounterTwo from "./components/HoverCounterTwo";
import User from "./components/User";
import CounterRenderProps from "./components/CounterRenderProps";
import ComponentC from "./components/ComponentC";
import { UserProvider } from "./components/UserContext";

function App() {
  return (
    <div className="App">
      {
        // <Great name="hanan" heroName="M7md"/ >
        // <Great name="hanan2" heroName="M7md2">
        //     <p> This is Children prop</p>
        // </Great>
        // < Welcome  name="Clark" heroName="M7md"/ >
        // < Welcome  name="Diana" heroName="M7md"/ >
        // <Message />
        // <Great name="hanan3" heroName="M7md3" />
        // <Counter />
        // <FunctionalClick />
        // <ClassClick />
        // <EventBind />
        // <ParentComponent />
        // <UserGreeting />
        // <NameList />
      }
      {/* <h1 className="danger">Error</h1>
          <h1 className={styles.success}>Success</h1>
          <StyleSheet primary={true}/>
          <Inline/> 
          // <Form />

          */}
      {/* <LifeCycleA /> */}

      {/* <FragementDemo /> */}
      {/* <Table /> */}
      {/* <ParentComp/> */}
      {/* <RefsDemo/> */}
      {/* <FocusInput /> */}
      {/* <FRParentInput /> */}
      {/* <PrtalDemo /> */}
      {/* <ErrorBoundary>
          <Hero heroName='superman' />
        </ErrorBoundary>
        <ErrorBoundary>
          <Hero heroName='Batman' />
        </ErrorBoundary>
        <ErrorBoundary>
          <Hero heroName='joker' />
        </ErrorBoundary> */}
      {/* <ClickCounter name="Hanan" />
      <HoverCounter />
      <ClickCounterTwo />
      <HoverCounterTwo />
      <User render={(isLoggedIn) => (isLoggedIn ? "Vishwas" : "Guest")} /> */}

      {/* <CounterRenderProps>
        {(count, incrementCount) => (
          <ClickCounterTwo count={count} incrementCount={incrementCount} />
        )}
      </CounterRenderProps>

      <CounterRenderProps>
        {(count, incrementCount) => (
          <HoverCounterTwo count={count} incrementCount={incrementCount} />
        )}
      </CounterRenderProps> */}
      <UserProvider value="hanan mohammed">
        <ComponentC />
      </UserProvider>
    </div>
  );
}

export default App;
