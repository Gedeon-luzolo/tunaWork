"use client";

import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-blue-500 flex items-center justify-center">
                <span className="text-white font-bold">T</span>
              </div>
              <span className="text-xl font-bold">TunaWork</span>
            </div>
            <p className="text-gray-300 mb-4">
              Plateforme freelance congolaise connectant talents et
              opportunités.
            </p>
            <div className="space-y-2 text-sm text-gray-300">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>Kinshasa, RDC</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>contact@tunawork.cd</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>+243 123 456 789</span>
              </div>
            </div>
          </div>

          {/* Plateforme */}
          <div>
            <h3 className="font-semibold mb-4">Plateforme</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link href="/freelancers" className="hover:text-blue-400">
                  Trouver des freelancers
                </Link>
              </li>
              <li>
                <Link href="/post-project" className="hover:text-blue-400">
                  Publier un projet
                </Link>
              </li>
              <li>
                <Link href="/how-it-works" className="hover:text-blue-400">
                  Comment ça marche
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-blue-400">
                  Tarifs
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link href="/help" className="hover:text-blue-400">
                  Centre d'aide
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-blue-400">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-blue-400">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/become-freelancer" className="hover:text-blue-400">
                  Devenir freelancer
                </Link>
              </li>
            </ul>
          </div>

          {/* Légal */}
          <div>
            <h3 className="font-semibold mb-4">Légal</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link href="/terms" className="hover:text-blue-400">
                  Conditions d'utilisation
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-blue-400">
                  Confidentialité
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="hover:text-blue-400">
                  Cookies
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-700 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 TunaWork. Tous droits réservés.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-blue-400">
              📘
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-400">
              🐦
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-400">
              💼
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-400">
              📸
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-400">
              💬
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
