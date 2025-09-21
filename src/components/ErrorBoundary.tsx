import React, { Component, ReactNode } from 'react';
import { AlertTriangle } from 'lucide-react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

/**
 * Error Boundary Component
 * Catches JavaScript errors in child components and displays a fallback UI
 */
class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // Log error to console without exposing sensitive information
    console.error('Error Boundary caught an error:', {
      message: error.message,
      stack: error.stack,
      componentStack: errorInfo.componentStack
    });
    
    // In production, you might want to send this to an error reporting service
    // without exposing sensitive user data
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="min-h-screen flex items-center justify-center bg-brand-gray-light">
          <div className="text-center p-8 bg-white rounded-2xl shadow-card border border-brand-gold/20 max-w-md mx-4">
            <div className="w-16 h-16 mx-auto mb-6 bg-destructive/10 rounded-full flex items-center justify-center">
              <AlertTriangle className="w-8 h-8 text-destructive" strokeWidth={1.5} />
            </div>
            <h2 className="text-2xl font-bold text-brand-black mb-4 font-serif">
              Oops, une erreur s'est produite
            </h2>
            <p className="text-brand-gray mb-6 font-sans">
              Nous nous excusons pour ce désagrément. Veuillez rafraîchir la page ou réessayer plus tard.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="bg-brand-gold text-white px-6 py-3 rounded-lg font-medium hover:bg-brand-gold/90 transition-smooth"
            >
              Rafraîchir la page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;