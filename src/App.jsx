import React, { useState, useEffect } from 'react';
import AnnouncementBar from './components/AnnouncementBar';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Collections from './components/Collections';
import Products from './components/Products';
import QuickViewModal from './components/QuickViewModal';
import CartDrawer from './components/CartDrawer';
import OurStory from './components/OurStory';
import WhyChooseUs from './components/WhyChooseUs';
import CustomGifting from './components/CustomGifting';
import Testimonials from './components/Testimonials';
import InstagramGallery from './components/InstagramGallery';
import Newsletter from './components/Newsletter';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import CandleCareModal from './components/CandleCareModal';
import Toast from './components/Toast';

export default function App() {
  // Cart state
  const [cartItems, setCartItems] = useState([
    {
      id: 'rose-petal',
      name: 'Rose Petal',
      price: 499,
      colorName: 'Dusty Rose',
      colorHex: '#D89A9B',
      image: 'https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=800&q=80',
      quantity: 1,
    },
    {
      id: 'forest-whisper',
      name: 'Forest Whisper',
      price: 599,
      colorName: 'Sage Green',
      colorHex: '#829477',
      image: 'https://images.unsplash.com/photo-1602874801007-bd458bb1b8b8?auto=format&fit=crop&w=800&q=80',
      quantity: 1,
    },
  ]);

  // Wishlist state
  const [wishlist, setWishlist] = useState(['rose-petal', 'cinnamon-ember']);

  // Modals & Drawers state
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCareGuideOpen, setIsCareGuideOpen] = useState(false);

  // Filter state (allows collection cards to filter the shop section)
  const [activeCollectionFilter, setActiveCollectionFilter] = useState('all');

  // Active section for scroll highlighting
  const [activeSection, setActiveSection] = useState('home');

  // Toast feedback state
  const [toast, setToast] = useState(null);

  // Total items in cart
  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  // Scroll spy effect to highlight current section
  useEffect(() => {
    const handleScrollSpy = () => {
      const sections = ['home', 'shop', 'collections', 'our-story', 'why-lumora', 'custom-gifting', 'reviews', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScrollSpy);
    return () => window.removeEventListener('scroll', handleScrollSpy);
  }, []);

  // Cart operations
  const handleAddToCart = (product, quantity = 1) => {
    setCartItems((prevItems) => {
      const existing = prevItems.find((item) => item.id === product.id);
      if (existing) {
        return prevItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
        );
      }
      return [
        ...prevItems,
        {
          id: product.id,
          name: product.name,
          price: product.price,
          colorName: product.colorName,
          colorHex: product.colorHex,
          image: product.image,
          quantity: quantity,
        },
      ];
    });

    setToast({
      title: 'Added to Shopping Bag',
      message: `${quantity}x ${product.name} (${product.colorName}) is now in your bag.`,
      showCartAction: true,
    });
  };

  const handleUpdateQuantity = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      handleRemoveItem(productId);
      return;
    }
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const handleRemoveItem = (productId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== productId));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  // Wishlist toggle
  const handleToggleWishlist = (product) => {
    setWishlist((prev) => {
      const exists = prev.includes(product.id);
      if (exists) {
        setToast({
          title: 'Removed from Wishlist',
          message: `${product.name} removed from your saved items.`,
        });
        return prev.filter((id) => id !== product.id);
      } else {
        setToast({
          title: 'Saved to Wishlist ❤️',
          message: `${product.name} saved to your favorites.`,
        });
        return [...prev, product.id];
      }
    });
  };

  // Navigations from Hero
  const scrollToShop = () => {
    const shopElement = document.getElementById('shop');
    if (shopElement) {
      shopElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToStory = () => {
    const storyElement = document.getElementById('our-story');
    if (storyElement) {
      storyElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // When a collection card is clicked, filter the shop and scroll down
  const handleSelectCollection = (collectionId) => {
    setActiveCollectionFilter(collectionId);
    scrollToShop();
  };

  return (
    <div className="min-h-screen flex flex-col bg-cream-100 text-espresso relative">
      {/* 4.A Announcement Bar */}
      <AnnouncementBar onOpenPromo={() => setIsCartOpen(true)} />

      {/* 4.B Sticky Navigation Bar */}
      <Navbar
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenCareGuide={() => setIsCareGuideOpen(true)}
        onOpenContact={() => {
          const contactElement = document.getElementById('contact');
          if (contactElement) contactElement.scrollIntoView({ behavior: 'smooth' });
        }}
        activeSection={activeSection}
      />

      {/* Main Page Flow */}
      <main className="flex-1">
        {/* 4.C Hero Section */}
        <Hero
          onExploreClick={scrollToShop}
          onStoryClick={scrollToStory}
        />

        {/* 4.D Shop by Collection */}
        <Collections onSelectCollection={handleSelectCollection} />

        {/* 4.E Bestselling Candles */}
        <Products
          onAddToCart={handleAddToCart}
          onQuickView={(product) => setQuickViewProduct(product)}
          wishlist={wishlist}
          onToggleWishlist={handleToggleWishlist}
          activeCollectionFilter={activeCollectionFilter}
          setActiveCollectionFilter={setActiveCollectionFilter}
        />

        {/* 4.F Our Story */}
        <OurStory />

        {/* 4.G Why Choose LUMORA */}
        <WhyChooseUs />

        {/* 4.H Custom Orders & Gifting */}
        <CustomGifting />

        {/* 4.I Customer Testimonials */}
        <Testimonials />

        {/* 4.J Instagram Gallery */}
        <InstagramGallery />

        {/* 4.K Newsletter Section */}
        <Newsletter />

        {/* Contact Section */}
        <ContactSection />
      </main>

      {/* 4.L Footer */}
      <Footer onOpenCareGuide={() => setIsCareGuideOpen(true)} />

      {/* Floating WhatsApp Button */}
      <WhatsAppButton />

      {/* Quick View Product Modal */}
      {quickViewProduct && (
        <QuickViewModal
          product={quickViewProduct}
          onClose={() => setQuickViewProduct(null)}
          onAddToCart={handleAddToCart}
          isWishlisted={wishlist.includes(quickViewProduct.id)}
          onToggleWishlist={handleToggleWishlist}
        />
      )}

      {/* Slide-over Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      {/* Candle Care Ritual Modal */}
      <CandleCareModal
        isOpen={isCareGuideOpen}
        onClose={() => setIsCareGuideOpen(false)}
      />

      {/* Floating Action Feedback Toast */}
      <Toast
        toast={toast}
        onClose={() => setToast(null)}
        onOpenCart={() => setIsCartOpen(true)}
      />
    </div>
  );
}
