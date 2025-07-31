import { MainLayout } from '../../shared/layouts';
import { Button } from '../../shared/components/ui/button';
import { ArrowLeft, Home } from 'lucide-react';
import { Link } from '../../i18n/navigation';

export default function NotFound() {
  return (
    <MainLayout>
      <div className="container py-16 md:py-24">
        <div className="max-w-md mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-9xl font-bold text-primary/20">404</h1>
            <h2 className="text-2xl font-bold mb-4">Page Not Found</h2>
            <p className="text-muted-foreground mb-8">
              Sorry, the page you're looking for doesn't exist or has been moved.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="default" size="lg" className="group">
              <Link href="/">
                <Home className="mr-2 h-4 w-4" />
                Go Home
              </Link>
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="group"
              onClick={() => window.history.back()}
            >
              <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
              Go Back
            </Button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}