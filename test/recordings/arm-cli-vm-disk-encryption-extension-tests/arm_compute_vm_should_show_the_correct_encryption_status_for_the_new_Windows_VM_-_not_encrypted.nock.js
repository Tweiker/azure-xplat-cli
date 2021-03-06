// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '00000000-0000-0000-0000-000000000000',
    name: 'disk encryption',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '00000000-0000-0000-0000-000000000000',
    state: 'Enabled',
    registeredProviders: [],
    _eventsCount: '1',
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_VM_TEST_LOCATION'] = 'westus';
  process.env['SSHCERT'] = 'test/myCert.pem';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/xplatTestADE8597/providers/Microsoft.Compute/virtualMachines/xplattestvm?api-version=2016-03-30')
  .reply(200, "{\r\n  \"properties\": {\r\n    \"vmId\": \"6a58b989-f331-4f80-bd7a-53800aab1cfc\",\r\n    \"hardwareProfile\": {\r\n      \"vmSize\": \"Standard_DS1\"\r\n    },\r\n    \"storageProfile\": {\r\n      \"imageReference\": {\r\n        \"publisher\": \"MicrosoftWindowsServer\",\r\n        \"offer\": \"WindowsServer\",\r\n        \"sku\": \"2012-R2-Datacenter\",\r\n        \"version\": \"latest\"\r\n      },\r\n      \"osDisk\": {\r\n        \"osType\": \"Windows\",\r\n        \"name\": \"cli09bb0e8106a7defa-os-1484005335528\",\r\n        \"createOption\": \"FromImage\",\r\n        \"vhd\": {\r\n          \"uri\": \"https://xplatteststorage14570.blob.core.windows.net/xplatteststoragecnt15099/cli09bb0e8106a7defa-os-1484005335528.vhd\"\r\n        },\r\n        \"caching\": \"ReadWrite\"\r\n      },\r\n      \"dataDisks\": []\r\n    },\r\n    \"osProfile\": {\r\n      \"computerName\": \"xplattestvm\",\r\n      \"adminUsername\": \"azureuser\",\r\n      \"windowsConfiguration\": {\r\n        \"provisionVMAgent\": true,\r\n        \"enableAutomaticUpdates\": true\r\n      },\r\n      \"secrets\": []\r\n    },\r\n    \"networkProfile\": {\"networkInterfaces\":[{\"id\":\"/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/xplatTestADE8597/providers/Microsoft.Network/networkInterfaces/xplattestnic\"}]},\r\n    \"diagnosticsProfile\": {\r\n      \"bootDiagnostics\": {\r\n        \"enabled\": true,\r\n        \"storageUri\": \"https://xplatteststorage14570.blob.core.windows.net/\"\r\n      }\r\n    },\r\n    \"provisioningState\": \"Succeeded\"\r\n  },\r\n  \"resources\": [\r\n    {\r\n      \"properties\": {\r\n        \"publisher\": \"Microsoft.Compute\",\r\n        \"type\": \"BGInfo\",\r\n        \"typeHandlerVersion\": \"2.1\",\r\n        \"autoUpgradeMinorVersion\": true,\r\n        \"provisioningState\": \"Succeeded\"\r\n      },\r\n      \"type\": \"Microsoft.Compute/virtualMachines/extensions\",\r\n      \"location\": \"westus\",\r\n      \"id\": \"/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/xplatTestADE8597/providers/Microsoft.Compute/virtualMachines/xplattestvm/extensions/BGInfo\",\r\n      \"name\": \"BGInfo\"\r\n    }\r\n  ],\r\n  \"type\": \"Microsoft.Compute/virtualMachines\",\r\n  \"location\": \"westus\",\r\n  \"tags\": {},\r\n  \"id\": \"/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/xplatTestADE8597/providers/Microsoft.Compute/virtualMachines/xplattestvm\",\r\n  \"name\": \"xplattestvm\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2221',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': '06b80642-ed2c-475d-a97b-eaddb4519ab6_131282052757902591',
  'x-ms-request-id': '9fa3c553-9e1f-4907-ad05-4bdf6bd44c04',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14974',
  'x-ms-correlation-request-id': '64b62333-ee58-44e0-bd29-12b494fb56df',
  'x-ms-routing-request-id': 'WESTUS2:20170109T235022Z:64b62333-ee58-44e0-bd29-12b494fb56df',
  date: 'Mon, 09 Jan 2017 23:50:21 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/xplatTestADE8597/providers/Microsoft.Compute/virtualMachines/xplattestvm?api-version=2016-03-30')
  .reply(200, "{\r\n  \"properties\": {\r\n    \"vmId\": \"6a58b989-f331-4f80-bd7a-53800aab1cfc\",\r\n    \"hardwareProfile\": {\r\n      \"vmSize\": \"Standard_DS1\"\r\n    },\r\n    \"storageProfile\": {\r\n      \"imageReference\": {\r\n        \"publisher\": \"MicrosoftWindowsServer\",\r\n        \"offer\": \"WindowsServer\",\r\n        \"sku\": \"2012-R2-Datacenter\",\r\n        \"version\": \"latest\"\r\n      },\r\n      \"osDisk\": {\r\n        \"osType\": \"Windows\",\r\n        \"name\": \"cli09bb0e8106a7defa-os-1484005335528\",\r\n        \"createOption\": \"FromImage\",\r\n        \"vhd\": {\r\n          \"uri\": \"https://xplatteststorage14570.blob.core.windows.net/xplatteststoragecnt15099/cli09bb0e8106a7defa-os-1484005335528.vhd\"\r\n        },\r\n        \"caching\": \"ReadWrite\"\r\n      },\r\n      \"dataDisks\": []\r\n    },\r\n    \"osProfile\": {\r\n      \"computerName\": \"xplattestvm\",\r\n      \"adminUsername\": \"azureuser\",\r\n      \"windowsConfiguration\": {\r\n        \"provisionVMAgent\": true,\r\n        \"enableAutomaticUpdates\": true\r\n      },\r\n      \"secrets\": []\r\n    },\r\n    \"networkProfile\": {\"networkInterfaces\":[{\"id\":\"/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/xplatTestADE8597/providers/Microsoft.Network/networkInterfaces/xplattestnic\"}]},\r\n    \"diagnosticsProfile\": {\r\n      \"bootDiagnostics\": {\r\n        \"enabled\": true,\r\n        \"storageUri\": \"https://xplatteststorage14570.blob.core.windows.net/\"\r\n      }\r\n    },\r\n    \"provisioningState\": \"Succeeded\"\r\n  },\r\n  \"resources\": [\r\n    {\r\n      \"properties\": {\r\n        \"publisher\": \"Microsoft.Compute\",\r\n        \"type\": \"BGInfo\",\r\n        \"typeHandlerVersion\": \"2.1\",\r\n        \"autoUpgradeMinorVersion\": true,\r\n        \"provisioningState\": \"Succeeded\"\r\n      },\r\n      \"type\": \"Microsoft.Compute/virtualMachines/extensions\",\r\n      \"location\": \"westus\",\r\n      \"id\": \"/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/xplatTestADE8597/providers/Microsoft.Compute/virtualMachines/xplattestvm/extensions/BGInfo\",\r\n      \"name\": \"BGInfo\"\r\n    }\r\n  ],\r\n  \"type\": \"Microsoft.Compute/virtualMachines\",\r\n  \"location\": \"westus\",\r\n  \"tags\": {},\r\n  \"id\": \"/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/xplatTestADE8597/providers/Microsoft.Compute/virtualMachines/xplattestvm\",\r\n  \"name\": \"xplattestvm\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2221',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': '06b80642-ed2c-475d-a97b-eaddb4519ab6_131282052757902591',
  'x-ms-request-id': '9fa3c553-9e1f-4907-ad05-4bdf6bd44c04',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14974',
  'x-ms-correlation-request-id': '64b62333-ee58-44e0-bd29-12b494fb56df',
  'x-ms-routing-request-id': 'WESTUS2:20170109T235022Z:64b62333-ee58-44e0-bd29-12b494fb56df',
  date: 'Mon, 09 Jan 2017 23:50:21 GMT',
  connection: 'close' });
 return result; }]];
 exports.uuidsGenerated = function() { return ['c63bee33-0993-436e-a8a4-938000cb5c40'];};