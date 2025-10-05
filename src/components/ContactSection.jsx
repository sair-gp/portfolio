import {
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitter,
  X,
} from "lucide-react";

import { cn } from "@/lib/utils.js";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary"> Touch</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-2-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out.
          I'm always open to discussing new opportunities.
        </p>
        <div className="flex flex-col items-center justify-center px-4 py-12">
          <div className="max-w-md w-full space-y-10 text-center">
            <h3 className="text-2xl font-semibold">Contact Information</h3>

            <div className="space-y-8">
              {/* Email */}
              <div className="flex flex-col sm:flex-row items-center sm:items-center sm:justify-start sm:space-x-4 lg:ml-20 md:ml-20">
                <div className="p-3 rounded-full bg-primary/10 flex-shrink-0">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div className="text-center sm:text-left mt-2 sm:mt-0">
                  <h4 className="font-medium">Email</h4>
                  <a
                    href="mailto:sair.bermudez@protonmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    sair.bermudez@protonmail.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex flex-col sm:flex-row items-center sm:items-center sm:justify-start sm:space-x-4 lg:ml-20 md:ml-20">
                <div className="p-3 rounded-full bg-primary/10 flex-shrink-0">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div className="text-center sm:text-left mt-2 sm:mt-0">
                  <h4 className="font-medium">Phone</h4>
                  <a
                    href="tel:+59896247344"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +598 96 247 344
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex flex-col sm:flex-row items-center sm:items-center sm:justify-start sm:space-x-4 lg:ml-20 md:ml-20">
                <div className="p-3 rounded-full bg-primary/10 flex-shrink-0">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div className="text-center sm:text-left mt-2 sm:mt-0">
                  <h4 className="font-medium">Location</h4>
                  <p className="text-muted-foreground">Montevideo, Uruguay</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-8">
              <h4 className="font-medium mb-4">Connect With Me</h4>
              <div className="flex justify-center space-x-6">
                <a
                  href="#"
                  target="_blank"
                  className="hover:text-primary transition-colors"
                >
                  <Linkedin />
                </a>
                <a
                  href="#"
                  target="_blank"
                  className="hover:text-primary transition-colors"
                >
                  <Instagram />
                </a>
                <a
                  href="#"
                  target="_blank"
                  className="hover:text-primary transition-colors"
                >
                  <Twitter />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
