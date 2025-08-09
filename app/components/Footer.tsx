const Footer = () => {
    return (
      <footer className="bg-gray-900 border-t border-gray-700 py-8">
        <div className="container mx-auto px-6 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Nongki. All Rights Reserved.</p>
          <p className="text-sm mt-2">Built for the best community on the web.</p>
        </div>
      </footer>
    )
  }
  
  export default Footer
  