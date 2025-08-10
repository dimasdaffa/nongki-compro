const Footer = () => {
    return (
      <footer className="bg-gray-900 border-t border-gray-700 py-8"
      style={{
        background:
          "linear-gradient(152.92deg, rgba(10,0,20,0.9)",
      }}
      >
        <div className="container mx-auto px-6 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} NONGKI. All Rights Reserved.</p>
          <p className="text-sm mt-2">Built for the best community on the web.</p>
        </div>
      </footer>
    )
  }
  
  export default Footer
  