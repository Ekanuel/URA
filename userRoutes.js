const tables = require('./models');

const taxPayerRegistration = async (req, res) => {
    try {
      // const newTaxpayer = new Taxpayer(req.body);
      console.log(req.body);
      const newTaxpayer = await tables.Taxpayer.create(req.body);
      res.status(201).json(newTaxpayer);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };

const loadTaxPayer = function (){console.log('am good')};

const assetRegistration = async (req, res) => {
    try {
      // const newAsset = new Asset(req.body);
      console.log(req.body);
      const newAsset = await tables.Asset.create(req.body);
      res.status(201).json(newAsset);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };

const loadAsset = function (){console.log('am good')};

module.exports = {
    taxPayerRegistration,
    assetRegistration,
    loadAsset,
    loadTaxPayer
}

