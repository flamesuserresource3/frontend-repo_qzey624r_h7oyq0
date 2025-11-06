export default function Footer() {
  return (
    <footer className="mt-8 border-t border-neutral-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-1 sm:grid-cols-3 gap-8 text-sm text-neutral-600">
        <div>
          <h4 className="font-semibold text-neutral-900">About</h4>
          <p className="mt-2">A modern marketplace starter: products, cart, vendor onboarding, and payouts. Ready to connect to your backend.</p>
        </div>
        <div>
          <h4 className="font-semibold text-neutral-900">For Vendors</h4>
          <ul className="mt-2 space-y-1">
            <li>Vendor registration</li>
            <li>Product listing & moderation</li>
            <li>Inventory management</li>
            <li>Commissions & payouts</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-neutral-900">Support</h4>
          <ul className="mt-2 space-y-1">
            <li>Shipping & taxes</li>
            <li>Returns & disputes</li>
            <li>Order tracking</li>
            <li>Contact us</li>
          </ul>
        </div>
      </div>
      <div className="py-4 text-center text-xs text-neutral-500">© {new Date().getFullYear()} Flames Market. All rights reserved.</div>
    </footer>
  );
}
