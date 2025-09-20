import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const PrivacyPolicy = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Privacy Policy — BlindSpot";
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-30 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
        <nav className="container mx-auto flex items-center justify-between h-16 px-4">
          <Button 
            variant="ghost" 
            onClick={() => navigate("/")}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to BlindSpot
          </Button>
        </nav>
      </header>

      <main className="container mx-auto max-w-4xl px-4 py-8">
        <div className="prose prose-neutral dark:prose-invert max-w-none">
          <h1 className="text-3xl font-bold tracking-tight mb-8">Privacy Policy for BlindSpot</h1>
          
          <p className="text-sm text-muted-foreground mb-8">Last Updated: December 2024</p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
            <p className="text-muted-foreground mb-4">
              This Privacy Policy describes how PatchLoop Labs ("we," "our," or "us") handles information when you use the BlindSpot mobile application ("App"). BlindSpot is a spoiler-blocking application that helps users avoid unwanted spoiler content while browsing other apps on their Android device.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Information We Collect</h2>
            
            <h3 className="text-xl font-medium mb-3">2.1 User-Provided Information</h3>
            <ul className="list-disc pl-6 mb-4 text-muted-foreground">
              <li>Keywords and spoiler terms you choose to block</li>
              <li>App settings and preferences</li>
              <li>Bug reports and feedback (if you choose to submit them)</li>
            </ul>

            <h3 className="text-xl font-medium mb-3">2.2 Automatically Collected Information</h3>
            <ul className="list-disc pl-6 mb-4 text-muted-foreground">
              <li>Device information (Android version, device model)</li>
              <li>App usage statistics (for determining which apps to monitor)</li>
              <li>Currently active app package names (to determine when to activate spoiler blocking)</li>
            </ul>

            <h3 className="text-xl font-medium mb-3">2.3 Information We DO NOT Collect</h3>
            <ul className="list-disc pl-6 mb-4 text-muted-foreground">
              <li>Personal identification information (name, email, phone number)</li>
              <li>Location data</li>
              <li>Browsing history or content from other apps</li>
              <li>Photos, videos, or other media files</li>
              <li>Contact lists or personal contacts</li>
              <li>Payment information (handled by Google Play Store)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. How We Use Your Information</h2>
            <p className="text-muted-foreground mb-4">We use the information we collect to:</p>
            <ul className="list-disc pl-6 mb-4 text-muted-foreground">
              <li>Provide spoiler-blocking functionality by monitoring specified apps</li>
              <li>Store your keyword preferences locally on your device</li>
              <li>Determine which apps are currently active to activate blocking when appropriate</li>
              <li>Improve app performance and fix bugs</li>
              <li>Process premium subscription purchases (handled by Google Play Billing)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Information Storage and Security</h2>
            
            <h3 className="text-xl font-medium mb-3">4.1 Local Storage</h3>
            <ul className="list-disc pl-6 mb-4 text-muted-foreground">
              <li>All your keywords and app settings are stored locally on your device using Android's SharedPreferences</li>
              <li>No personal data is transmitted to external servers</li>
              <li>Data remains on your device unless you uninstall the app</li>
            </ul>

            <h3 className="text-xl font-medium mb-3">4.2 Security Measures</h3>
            <ul className="list-disc pl-6 mb-4 text-muted-foreground">
              <li>We implement appropriate technical and organizational measures to protect your information</li>
              <li>All data processing occurs locally on your device</li>
              <li>We do not maintain external databases containing your personal information</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Permissions Required</h2>
            <p className="text-muted-foreground mb-4">BlindSpot requires the following Android permissions to function:</p>

            <h3 className="text-xl font-medium mb-3">5.1 Accessibility Service Permission</h3>
            <ul className="list-disc pl-6 mb-4 text-muted-foreground">
              <li>Purpose: To read text content from other apps and detect spoiler keywords</li>
              <li>Usage: Monitors text content in real-time to identify and block spoiler content</li>
              <li>Data Access: Reads only text content from monitored apps; does not store or transmit this content</li>
            </ul>

            <h3 className="text-xl font-medium mb-3">5.2 System Alert Window Permission (Overlay Permission)</h3>
            <ul className="list-disc pl-6 mb-4 text-muted-foreground">
              <li>Purpose: To display black overlay rectangles over spoiler content</li>
              <li>Usage: Creates visual blocks over text containing your specified keywords</li>
              <li>Data Access: No data collection; purely visual blocking functionality</li>
            </ul>

            <h3 className="text-xl font-medium mb-3">5.3 Usage Access Permission</h3>
            <ul className="list-disc pl-6 mb-4 text-muted-foreground">
              <li>Purpose: To determine which apps are currently active on your device</li>
              <li>Usage: Monitors app switching to activate spoiler blocking only when using monitored apps</li>
              <li>Data Access: Accesses only app package names and usage statistics; no content access</li>
            </ul>

            <h3 className="text-xl font-medium mb-3">5.4 Notification Permission</h3>
            <ul className="list-disc pl-6 mb-4 text-muted-foreground">
              <li>Purpose: To display status notifications about the app's operation</li>
              <li>Usage: Shows when spoiler blocking is active or inactive</li>
              <li>Data Access: No personal data in notifications</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. Third-Party Services</h2>
            
            <h3 className="text-xl font-medium mb-3">6.1 Google Play Billing</h3>
            <ul className="list-disc pl-6 mb-4 text-muted-foreground">
              <li>We use Google Play Billing for premium subscription purchases</li>
              <li>Google handles all payment processing and subscription management</li>
              <li>We do not have access to your payment information</li>
              <li>Google's privacy policy applies to billing transactions</li>
            </ul>

            <h3 className="text-xl font-medium mb-3">6.2 No Other Third-Party Services</h3>
            <ul className="list-disc pl-6 mb-4 text-muted-foreground">
              <li>We do not use analytics services, advertising networks, or other third-party data collection services</li>
              <li>No data is shared with or sold to third parties</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">7. Data Retention</h2>
            <ul className="list-disc pl-6 mb-4 text-muted-foreground">
              <li>Your keywords and settings are retained locally on your device until you delete them or uninstall the app</li>
              <li>We do not maintain copies of your data on external servers</li>
              <li>You can delete all your data at any time by uninstalling the app or using the "Delete All Keywords" feature</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">8. Your Rights and Choices</h2>
            <p className="text-muted-foreground mb-4">You have the right to:</p>
            <ul className="list-disc pl-6 mb-4 text-muted-foreground">
              <li>Add, modify, or delete keywords at any time through the app interface</li>
              <li>Enable or disable the spoiler blocking service</li>
              <li>Revoke any permissions through your device's settings</li>
              <li>Delete all app data by uninstalling the app</li>
              <li>Contact us with questions or concerns about your privacy</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">9. Children's Privacy</h2>
            <p className="text-muted-foreground mb-4">
              BlindSpot is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us so we can delete such information.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">10. International Users</h2>
            <p className="text-muted-foreground mb-4">
              BlindSpot is designed to work locally on your device and does not involve international data transfers. All data processing occurs on your device within your local jurisdiction.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">11. Changes to This Privacy Policy</h2>
            <p className="text-muted-foreground mb-4">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy in the app and updating the "Last Updated" date. You are advised to review this Privacy Policy periodically for any changes.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">12. Contact Information</h2>
            <p className="text-muted-foreground mb-4">
              If you have any questions about this Privacy Policy or our privacy practices, please contact us at:
            </p>
            <p className="text-muted-foreground mb-4">
              Email: blindspot@gmail.com
            </p>
            <p className="text-muted-foreground mb-4">
              For bug reports or technical support, you can also use the "Submit Bug Report" feature within the app.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">13. Compliance</h2>
            <p className="text-muted-foreground mb-4">This Privacy Policy complies with:</p>
            <ul className="list-disc pl-6 mb-4 text-muted-foreground">
              <li>Google Play Store Developer Policy</li>
              <li>Android Accessibility Service guidelines</li>
              <li>General data protection principles</li>
              <li>Local privacy laws and regulations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">14. Data Processing Legal Basis</h2>
            <p className="text-muted-foreground mb-4">Our processing of your information is based on:</p>
            <ul className="list-disc pl-6 mb-4 text-muted-foreground">
              <li>Your consent (for keyword storage and app functionality)</li>
              <li>Legitimate interest (for app performance and bug fixing)</li>
              <li>Contractual necessity (for premium subscription features)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">15. Data Minimization</h2>
            <p className="text-muted-foreground mb-4">We follow the principle of data minimization by:</p>
            <ul className="list-disc pl-6 mb-4 text-muted-foreground">
              <li>Only collecting information necessary for app functionality</li>
              <li>Storing data locally on your device</li>
              <li>Not collecting unnecessary personal information</li>
              <li>Allowing you to delete your data at any time</li>
            </ul>
            <p className="text-muted-foreground">
              By using BlindSpot, you acknowledge that you have read and understood this Privacy Policy and agree to the collection and use of information as described herein.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
};

export default PrivacyPolicy;