import React, { Component } from 'react';

type ErrorBoundaryProps = {
  children: React.ReactNode;
};

interface IErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, IErrorBoundaryState> {
  constructor(props: any) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(error: any): object {
    return {
      hasError: true,
    };
  }

  render() {
    if (this.state.hasError) {
      return <h2>Что-то пошло не так. Посты не могут быть загружены</h2>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
