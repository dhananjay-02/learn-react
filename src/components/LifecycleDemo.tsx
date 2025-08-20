import React from "react";

interface LifecycleDemoState {
  count: number;
  data: string | null;
}

interface LifecycleDemoProps {}

//with generics.
// class LifecycleDemo extends React.Component<Props, State> 

class LifecycleDemo extends React.Component<LifecycleDemoProps, LifecycleDemoState> {
  
  private timer: number | null = null;

  constructor(props: LifecycleDemoProps) {
    super(props);
    console.log('🔵 MOUNTING: Constructor');
    this.state = {
      
      count: 0,
      data: null
    };
  }

  componentDidMount(): void {
    console.log('🔵 MOUNTING: ComponentDidMount');
    
    this.fetchData();
    this.timer = setInterval(() => {
      this.setState(prev => ({ count: prev.count + 1 }));
    }, 1000);
  }

  componentDidUpdate(prevProps: LifecycleDemoProps, prevState: LifecycleDemoState): void {
    console.log('🟡 UPDATING: ComponentDidUpdate');
    console.log('Previous count:', prevState.count);
    console.log('Current count:', this.state.count);
    
    if (this.state.count >= 10 && this.timer !== null) {
      clearInterval(this.timer);
      this.timer = null;
      console.log('🛑 Timer stopped at count 10');
    }
  }

  componentWillUnmount(): void {
    console.log('🔴 UNMOUNTING: ComponentWillUnmount');
    
    // ✅ Works with number type
    if (this.timer !== null) {
      clearInterval(this.timer);
    }
  }

  fetchData = (): void => {
    setTimeout(() => {
      this.setState({ data: 'Fetched data!' });
    }, 1000);
  }

  render(): React.ReactNode {
    console.log('🟢 RENDER: Rendering component');
    return (
      <div>
        <h1>Lifecycle Demo</h1>
        <p>Count: {this.state.count}</p>
        <p>Data: {this.state.data || 'Loading...'}</p>
      </div>
    );
  }
}

export default LifecycleDemo;