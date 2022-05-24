var express = require("express");
const router = express.Router();

const controller = require("./Controller");

router.get("/getRules/", controller.getRules);
router.get("/getRulebyId/", controller.getRulebyId);
router.post("/SaveCondition", controller.SaveCondition);
router.post("/SaveRule", controller.SaveRule);
router.post("/factCheck", controller.factCheck);
router.post("/resolveRules", controller.resolveRules);
router.get("/facts", controller.getFacts);
router.post("/addRule", controller.addRule);
router.patch("/editRule/:id", controller.editRule);
router.patch("/editRuleDetails/:id", controller.editRuleDetails);
router.get("/getRuleParams", controller.getRuleParams);
router.get("/getFactsData", controller.getFactsData);
router.post("/toggleFactIsActive/", controller.toggleFactIsActive);
router.get("/leadRankingAllocation", controller.processLeadRankingAllocation);
router.get("/processGroupAllocation", controller.processGroupAllocation);
router.get("/getLeadsData", controller.getLeadsData);

module.exports = router;