const tables = require('./models');

const taxPayerRegistration = async (req, res) => {
    try {
      // const newTaxpayer = new Taxpayer(req.body);
      console.log(req.body);
      const newTaxpayer = await tables.Taxpayer.create(req.body);
      res.status(201).json(newTaxpayer);
    } catch (error) {
      console.error(error);
      res.status(500).json({ tin: 'Internal Server Error: '+error.message });
    }
  };

const loadTaxPayer = async (req, res) => {
    try {
        const citizens = await tables.Taxpayer.find();
        res.status(200).json(citizens);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const assetRegistration = async (req, res) => {
    try {
      // const newAsset = new Asset(req.body);
      console.log(req.body);
      const newAsset = await tables.Asset.create(req.body);
      res.status(201).json(newAsset);
    } catch (error) {
      console.error(error);
      res.status(500).json({ assetCode: 'Internal Server Error: '+error.message });
    }
  };

const loadAsset =  async (req, res) => {
    try {
        const titles = await tables.Asset.find();
        res.status(200).json(titles);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


module.exports = {
    taxPayerRegistration,
    assetRegistration,
    loadAsset,
    loadTaxPayer
}

