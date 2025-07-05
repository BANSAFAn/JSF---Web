
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Construction, ExternalLink, Github } from 'lucide-react';

export const LaunchersTab = () => {
  const launchersInVerification = [
    'XMCL',
    'HMCL', 
    'Lexplosion',
    'Fold Craft Launcher',
    'Fluent Launcher'
  ];

  return (
    <div className="space-y-6">
      <Card className="border-amber-200 bg-amber-50 dark:bg-amber-950/20 dark:border-amber-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-amber-800 dark:text-amber-200">
            <Construction className="w-5 h-5" />
            Development Notice
          </CardTitle>
          <CardDescription className="text-amber-700 dark:text-amber-300">
            This section is currently in development and verification. We're working hard to provide you with comprehensive launcher information.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h3 className="font-medium mb-2 text-amber-800 dark:text-amber-200">Currently Verifying Launchers:</h3>
            <div className="flex flex-wrap gap-2">
              {launchersInVerification.map((launcher) => (
                <Badge key={launcher} variant="secondary" className="bg-amber-100 text-amber-800 dark:bg-amber-900/50 dark:text-amber-200">
                  {launcher}
                </Badge>
              ))}
            </div>
          </div>
          
          <div className="pt-4">
            <p className="text-sm text-amber-700 dark:text-amber-300 mb-3">
              Want your launcher listed? Submit a request via GitHub Issues and we'll review it for inclusion.
            </p>
            <Button 
              className="bg-amber-600 hover:bg-amber-700 text-white"
              asChild
            >
              <a 
                href="https://github.com/BANSAFAn/minecraft-java-finder/issues/new?template=launcher-submission.md"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Github className="w-4 h-4" />
                Submit Launcher Request
                <ExternalLink className="w-4 h-4" />
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>What We're Working On</CardTitle>
          <CardDescription>
            Here's what you can expect when this section is complete
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 border rounded-lg bg-muted/50">
              <h3 className="font-medium mb-2">Launcher Ratings</h3>
              <p className="text-sm text-muted-foreground">Community-based ratings and reviews for each launcher</p>
            </div>
            <div className="p-4 border rounded-lg bg-muted/50">
              <h3 className="font-medium mb-2">Feature Comparison</h3>
              <p className="text-sm text-muted-foreground">Side-by-side comparison of launcher features and capabilities</p>
            </div>
            <div className="p-4 border rounded-lg bg-muted/50">
              <h3 className="font-medium mb-2">Direct Downloads</h3>
              <p className="text-sm text-muted-foreground">Verified download links and installation guides</p>
            </div>
            <div className="p-4 border rounded-lg bg-muted/50">
              <h3 className="font-medium mb-2">Compatibility Info</h3>
              <p className="text-sm text-muted-foreground">Java version compatibility and modloader support</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
