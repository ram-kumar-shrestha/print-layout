const PrintComponent = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div>
      <div className="no-print">
        <button onClick={handlePrint}>Print</button>
      </div>

      {/* Header */}
      <header className="print-header print-only">
        <h1>This is your print header.</h1>
      </header>

      {/* Content */}
      <div className="content">
        <table width="100%">
          <thead>
            <tr>
              <td className="header-placeholder"></td>
            </tr>
          </thead>
          <tfoot>
            <tr>
              <td className="footer-placeholder"></td>
            </tr>
          </tfoot>
          <tbody>
            <tr>
              <td>
                <div className="page-container">
                  <div className="page">
                    <table>
                      <thead>
                        <tr>
                          <td>SN</td>
                          <td>Table Header</td>
                        </tr>
                      </thead>
                      <tbody>
                        {Array.from({ length: 50 }).map((_, index) => (
                          <tr key={index}>
                            <td>{index + 1}</td>
                            <td>
                              {String.fromCharCode(
                                97 + Math.floor(Math.random() * 26)
                              )}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Footer */}
      <footer className="print-footer print-only">This is the footer</footer>
    </div>
  );
};

export default PrintComponent;
