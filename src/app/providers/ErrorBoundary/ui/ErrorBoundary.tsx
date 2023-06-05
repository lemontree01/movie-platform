import { Component, Suspense, type ErrorInfo, type ReactNode } from 'react';
import { PageError } from 'widgets/PageError/ui/PageError';

export class ErrorBoundary extends Component<
{
  children: ReactNode
},
{ hasError: boolean }
> {
  constructor (props: { children: ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError () {
    return { hasError: true };
  }

  componentDidCatch (error: Error, info: ErrorInfo) {
    console.log(error, info.componentStack);
  }

  render () {
    if (this.state.hasError) {
      return <Suspense fallback={<div></div>}><PageError/></Suspense>;
    }

    return this.props.children;
  }
}
