Search.setIndex({envversion:46,filenames:["api/AbstractData","api/ControllerProvider","api/DataFactoryInterface","api/Entity","api/EntityDefinition","api/EntityDefinitionFactory","api/EntityDefinitionFactoryInterface","api/EntityValidator","api/FileProcessorInterface","api/MySQLData","api/MySQLDataFactory","api/ReferenceValidator","api/ServiceProvider","api/SimpleFilesystemFileProcessor","api/StreamedFileResponse","api/UniqueValidator","index","manual/addons","manual/constraints","manual/datastructures","manual/datatypes","manual/events","manual/extendedfeatures","manual/introduction","manual/layouts","manual/setup","manual/templates"],objects:{"":{"AbstractData::$definition":[0,1,1,""],"AbstractData::$events":[0,1,1,""],"AbstractData::$fileProcessor":[0,1,1,""],"AbstractData::DELETION_FAILED_EVENT":[0,2,1,""],"AbstractData::DELETION_FAILED_STILL_REFERENCED":[0,2,1,""],"AbstractData::DELETION_SUCCESS":[0,2,1,""],"AbstractData::countBy":[0,0,1,""],"AbstractData::create":[0,0,1,""],"AbstractData::createEmpty":[0,0,1,""],"AbstractData::createFiles":[0,0,1,""],"AbstractData::delete":[0,0,1,""],"AbstractData::deleteFile":[0,0,1,""],"AbstractData::deleteFiles":[0,0,1,""],"AbstractData::doDelete":[0,0,1,""],"AbstractData::fetchReferences":[0,0,1,""],"AbstractData::get":[0,0,1,""],"AbstractData::getDefinition":[0,0,1,""],"AbstractData::getReferences":[0,0,1,""],"AbstractData::hydrate":[0,0,1,""],"AbstractData::listEntries":[0,0,1,""],"AbstractData::performOnFiles":[0,0,1,""],"AbstractData::popEvent":[0,0,1,""],"AbstractData::pushEvent":[0,0,1,""],"AbstractData::renderFile":[0,0,1,""],"AbstractData::shouldExecuteEvents":[0,0,1,""],"AbstractData::update":[0,0,1,""],"AbstractData::updateFiles":[0,0,1,""],"ControllerProvider::buildUpListFilter":[1,0,1,""],"ControllerProvider::connect":[1,0,1,""],"ControllerProvider::create":[1,0,1,""],"ControllerProvider::delete":[1,0,1,""],"ControllerProvider::deleteFile":[1,0,1,""],"ControllerProvider::edit":[1,0,1,""],"ControllerProvider::getAfterDeleteRedirectParameters":[1,0,1,""],"ControllerProvider::getNotFoundPage":[1,0,1,""],"ControllerProvider::modifyEntity":[1,0,1,""],"ControllerProvider::modifyFilesAndSetFlashBag":[1,0,1,""],"ControllerProvider::renderFile":[1,0,1,""],"ControllerProvider::setLocale":[1,0,1,""],"ControllerProvider::setValidationFailedFlashes":[1,0,1,""],"ControllerProvider::setupI18n":[1,0,1,""],"ControllerProvider::setupRoutes":[1,0,1,""],"ControllerProvider::setupTemplates":[1,0,1,""],"ControllerProvider::show":[1,0,1,""],"ControllerProvider::showList":[1,0,1,""],"ControllerProvider::staticFile":[1,0,1,""],"DataFactoryInterface::createData":[2,0,1,""],"Entity::$definition":[3,1,1,""],"Entity::$entity":[3,1,1,""],"Entity::__construct":[3,0,1,""],"Entity::get":[3,0,1,""],"Entity::getDefinition":[3,0,1,""],"Entity::getRaw":[3,0,1,""],"Entity::populateViaRequest":[3,0,1,""],"Entity::set":[3,0,1,""],"Entity::toType":[3,0,1,""],"EntityDefinition::$children":[4,1,1,""],"EntityDefinition::$childrenLabelFields":[4,1,1,""],"EntityDefinition::$deleteCascade":[4,1,1,""],"EntityDefinition::$fields":[4,1,1,""],"EntityDefinition::$filter":[4,1,1,""],"EntityDefinition::$initialSortAscending":[4,1,1,""],"EntityDefinition::$initialSortField":[4,1,1,""],"EntityDefinition::$label":[4,1,1,""],"EntityDefinition::$listFields":[4,1,1,""],"EntityDefinition::$locale":[4,1,1,""],"EntityDefinition::$localeLabels":[4,1,1,""],"EntityDefinition::$pageSize":[4,1,1,""],"EntityDefinition::$serviceProvider":[4,1,1,""],"EntityDefinition::$standardFieldLabels":[4,1,1,""],"EntityDefinition::$table":[4,1,1,""],"EntityDefinition::__construct":[4,0,1,""],"EntityDefinition::addChild":[4,0,1,""],"EntityDefinition::getChildren":[4,0,1,""],"EntityDefinition::getChildrenLabelFields":[4,0,1,""],"EntityDefinition::getDescription":[4,0,1,""],"EntityDefinition::getEditableFieldNames":[4,0,1,""],"EntityDefinition::getFieldLabel":[4,0,1,""],"EntityDefinition::getFieldNames":[4,0,1,""],"EntityDefinition::getFieldValue":[4,0,1,""],"EntityDefinition::getFilePath":[4,0,1,""],"EntityDefinition::getFilter":[4,0,1,""],"EntityDefinition::getFilteredFieldNames":[4,0,1,""],"EntityDefinition::getFixedValue":[4,0,1,""],"EntityDefinition::getFloatStep":[4,0,1,""],"EntityDefinition::getInitialSortField":[4,0,1,""],"EntityDefinition::getLabel":[4,0,1,""],"EntityDefinition::getListFields":[4,0,1,""],"EntityDefinition::getPageSize":[4,0,1,""],"EntityDefinition::getPublicFieldNames":[4,0,1,""],"EntityDefinition::getReadOnlyFields":[4,0,1,""],"EntityDefinition::getReferenceEntity":[4,0,1,""],"EntityDefinition::getReferenceNameField":[4,0,1,""],"EntityDefinition::getReferenceTable":[4,0,1,""],"EntityDefinition::getReferenceValue":[4,0,1,""],"EntityDefinition::getServiceProvider":[4,0,1,""],"EntityDefinition::getSetItems":[4,0,1,""],"EntityDefinition::getTable":[4,0,1,""],"EntityDefinition::getType":[4,0,1,""],"EntityDefinition::isConstraint":[4,0,1,""],"EntityDefinition::isDeleteCascade":[4,0,1,""],"EntityDefinition::isInitialSortAscending":[4,0,1,""],"EntityDefinition::isRequired":[4,0,1,""],"EntityDefinition::isUnique":[4,0,1,""],"EntityDefinition::setChildrenLabelFields":[4,0,1,""],"EntityDefinition::setDeleteCascade":[4,0,1,""],"EntityDefinition::setDescription":[4,0,1,""],"EntityDefinition::setFieldLabel":[4,0,1,""],"EntityDefinition::setFieldValue":[4,0,1,""],"EntityDefinition::setFilePath":[4,0,1,""],"EntityDefinition::setFilter":[4,0,1,""],"EntityDefinition::setFixedValue":[4,0,1,""],"EntityDefinition::setFloatStep":[4,0,1,""],"EntityDefinition::setInitialSortAscending":[4,0,1,""],"EntityDefinition::setInitialSortField":[4,0,1,""],"EntityDefinition::setLabel":[4,0,1,""],"EntityDefinition::setListFields":[4,0,1,""],"EntityDefinition::setLocale":[4,0,1,""],"EntityDefinition::setPageSize":[4,0,1,""],"EntityDefinition::setRequired":[4,0,1,""],"EntityDefinition::setServiceProvider":[4,0,1,""],"EntityDefinition::setSetItems":[4,0,1,""],"EntityDefinition::setTable":[4,0,1,""],"EntityDefinition::setType":[4,0,1,""],"EntityDefinition::setUnique":[4,0,1,""],"EntityDefinitionFactory::createEntityDefinition":[5,0,1,""],"EntityDefinitionFactoryInterface::createEntityDefinition":[6,0,1,""],"EntityValidator::$definition":[7,1,1,""],"EntityValidator::$entity":[7,1,1,""],"EntityValidator::__construct":[7,0,1,""],"EntityValidator::buildUpData":[7,0,1,""],"EntityValidator::buildUpRules":[7,0,1,""],"EntityValidator::fieldToRules":[7,0,1,""],"EntityValidator::validate":[7,0,1,""],"FileProcessorInterface::createFile":[8,0,1,""],"FileProcessorInterface::deleteFile":[8,0,1,""],"FileProcessorInterface::renderFile":[8,0,1,""],"FileProcessorInterface::updateFile":[8,0,1,""],"MySQLData::$database":[9,1,1,""],"MySQLData::$definition":[9,1,1,""],"MySQLData::$events":[9,1,1,""],"MySQLData::$fileProcessor":[9,1,1,""],"MySQLData::$useUUIDs":[9,1,1,""],"MySQLData::DELETION_FAILED_EVENT":[9,2,1,""],"MySQLData::DELETION_FAILED_STILL_REFERENCED":[9,2,1,""],"MySQLData::DELETION_SUCCESS":[9,2,1,""],"MySQLData::__construct":[9,0,1,""],"MySQLData::addFilter":[9,0,1,""],"MySQLData::addPagination":[9,0,1,""],"MySQLData::addSort":[9,0,1,""],"MySQLData::countBy":[9,0,1,""],"MySQLData::create":[9,0,1,""],"MySQLData::createEmpty":[9,0,1,""],"MySQLData::createFiles":[9,0,1,""],"MySQLData::delete":[9,0,1,""],"MySQLData::deleteChildren":[9,0,1,""],"MySQLData::deleteFile":[9,0,1,""],"MySQLData::deleteFiles":[9,0,1,""],"MySQLData::doDelete":[9,0,1,""],"MySQLData::fetchReferences":[9,0,1,""],"MySQLData::fetchReferencesForField":[9,0,1,""],"MySQLData::generateUUID":[9,0,1,""],"MySQLData::get":[9,0,1,""],"MySQLData::getDefinition":[9,0,1,""],"MySQLData::getReferences":[9,0,1,""],"MySQLData::hasChildren":[9,0,1,""],"MySQLData::hydrate":[9,0,1,""],"MySQLData::listEntries":[9,0,1,""],"MySQLData::performOnFiles":[9,0,1,""],"MySQLData::popEvent":[9,0,1,""],"MySQLData::pushEvent":[9,0,1,""],"MySQLData::renderFile":[9,0,1,""],"MySQLData::setValuesAndParameters":[9,0,1,""],"MySQLData::shouldExecuteEvents":[9,0,1,""],"MySQLData::update":[9,0,1,""],"MySQLData::updateFiles":[9,0,1,""],"MySQLDataFactory::$database":[10,1,1,""],"MySQLDataFactory::$useUUIDs":[10,1,1,""],"MySQLDataFactory::__construct":[10,0,1,""],"MySQLDataFactory::createData":[10,0,1,""],"ReferenceValidator::getInvalidDetails":[11,0,1,""],"ReferenceValidator::isValid":[11,0,1,""],"ServiceProvider::$datas":[12,1,1,""],"ServiceProvider::$manageI18n":[12,1,1,""],"ServiceProvider::basename":[12,0,1,""],"ServiceProvider::boot":[12,0,1,""],"ServiceProvider::configureDefinition":[12,0,1,""],"ServiceProvider::createDefinition":[12,0,1,""],"ServiceProvider::formatDate":[12,0,1,""],"ServiceProvider::formatDateTime":[12,0,1,""],"ServiceProvider::formatFloat":[12,0,1,""],"ServiceProvider::formatTime":[12,0,1,""],"ServiceProvider::getData":[12,0,1,""],"ServiceProvider::getEntities":[12,0,1,""],"ServiceProvider::getLanguageName":[12,0,1,""],"ServiceProvider::getLocaleLabels":[12,0,1,""],"ServiceProvider::getLocales":[12,0,1,""],"ServiceProvider::getTemplate":[12,0,1,""],"ServiceProvider::init":[12,0,1,""],"ServiceProvider::initChildren":[12,0,1,""],"ServiceProvider::initLocales":[12,0,1,""],"ServiceProvider::initMissingServiceProviders":[12,0,1,""],"ServiceProvider::isManagingI18n":[12,0,1,""],"ServiceProvider::readYaml":[12,0,1,""],"ServiceProvider::register":[12,0,1,""],"ServiceProvider::setLocale":[12,0,1,""],"SimpleFilesystemFileProcessor::$basePath":[13,1,1,""],"SimpleFilesystemFileProcessor::__construct":[13,0,1,""],"SimpleFilesystemFileProcessor::createFile":[13,0,1,""],"SimpleFilesystemFileProcessor::deleteFile":[13,0,1,""],"SimpleFilesystemFileProcessor::getPath":[13,0,1,""],"SimpleFilesystemFileProcessor::renderFile":[13,0,1,""],"SimpleFilesystemFileProcessor::updateFile":[13,0,1,""],"StreamedFileResponse::getStreamedFileFunction":[14,0,1,""],"UniqueValidator::getInvalidDetails":[15,0,1,""],"UniqueValidator::isValid":[15,0,1,""],AbstractData:[0,3,1,""],ControllerProvider:[1,3,1,""],DataFactoryInterface:[2,4,1,""],Entity:[3,3,1,""],EntityDefinition:[4,3,1,""],EntityDefinitionFactory:[5,3,1,""],EntityDefinitionFactoryInterface:[6,4,1,""],EntityValidator:[7,3,1,""],FileProcessorInterface:[8,4,1,""],MySQLData:[9,3,1,""],MySQLDataFactory:[10,3,1,""],ReferenceValidator:[11,3,1,""],ServiceProvider:[12,3,1,""],SimpleFilesystemFileProcessor:[13,3,1,""],StreamedFileResponse:[14,3,1,""],UniqueValidator:[15,3,1,""]}},objnames:{"0":["php","method","PHP method"],"1":["php","attr","PHP attribute"],"2":["php","const","PHP const"],"3":["php","class","PHP class"],"4":["php","interface","PHP interface"]},objtypes:{"0":"php:method","1":"php:attr","2":"php:const","3":"php:class","4":"php:interface"},terms:{"5px":24,"__construct":[3,4,7,9,10,13],"__dir__":[17,22,24,25],"_dir_":24,"abstract":[0,25],"boolean":[0,1,3,4,7,9,12,16],"case":[0,4,9,19,20,22,24,26],"char":20,"class":[0,1,3,4,5,7,8,9,10,11,12,13,14,15,20,24],"default":[5,19,20,22,24,25],"float":[3,4,7,12,16],"function":[0,9,12,14,21],"int":[19,20,26],"long":[0,9],"new":[0,1,4,6,9,17,20,22,24,25],"null":[0,1,3,4,9,12,19,21,22],"public":4,"return":[0,1,2,3,4,6,7,8,9,12,13,14,21],"static":1,"switch":16,"throw":12,"true":[0,1,4,9,12,17,18,20,21,22],"try":20,"void":[0,8],"while":22,abbrevi:23,abc:20,abl:23,about:[19,20,21],access:[7,12,25],accord:[7,9,12],achiev:26,action:[0,1,9,12,16,21,23],activ:[1,20,22],actual:[0,7,25],add:[0,4,9,17,20,22,25,26],addchild:4,addev:17,addfilt:9,addit:[16,22],addon:16,addpagin:9,addsort:9,adjust:26,admin:16,administr:23,after:[0,1,9,12,21],afterward:12,against:[7,17],alert:24,all:[0,1,4,7,9,12,13,17,19,20,22,23,24,25,26],allow:[20,22],alreadi:24,also:24,alter:20,although:25,alwai:[20,23],amazon:[17,20],amazons3fileprocessor:17,amet:20,amount:[0,4,9,19],ani:[0,9,17],anonym:[0,9],anoth:[0,9,24],api:16,app:[1,12,17,20,21,22,24,25,26],appear:4,applic:[1,12,17,23,24],appropri:[1,22],around:[17,22],arrai:[0,1,4,6,7,9,12,17,20,22,24,25],arround:3,ascend:[0,4,9,22],assum:[19,24],author:[18,19,20,22],auto:[16,17],auto_incr:19,automat:17,autor:22,avail:[0,9,12,16,19,20,21,25],awar:[0,8,9],back:20,bar:20,base:[13,20],basenam:12,basepath:13,basic:23,befor:[0,9,21,24],belong:[0,20],besid:19,best:12,between:20,big:22,bigger:22,bigint:20,bit:22,block:[24,26],blue:20,bodi:24,book:[18,19,20,22,24,25,26],book_ibfk_1:20,booklist:26,bool:26,booleanfield:26,boolfield:26,boot:12,bootstrap:24,bore:22,both:18,bottom:24,box:0,branch:17,broke:[0,9],btn:24,buch:22,build:[0,1,7,19],buildupdata:7,builduplistfilt:1,builduprul:7,button:[24,26],call:[0,9,12,24],can:[0,2,9,18,20,21,22,24,26],cancel:21,care:25,cascad:[9,16],caus:1,certain:[12,21,24],chain:[0,9],chang:[22,26],chapter:[17,19,22,23,24,25],charact:20,charset:25,check:[4,7,9,11,15],child:4,children:[0,4,9,12,16],childrenlabelfield:[4,20],choic:[19,20],chosen:20,clear:21,click:20,clickabl:20,close:24,closur:[0,9,21],code:[1,12,21],color:20,column:[19,26],com:20,combin:16,come:[23,24,25],compos:25,comprehens:20,concret:12,condit:0,configur:[9,12,17,23],configuredefinit:12,connect:1,consetetur:20,constant:[0,9],constraint:[4,16],construct:[2,13],constructor:[3,4,7,9,10,13],contain:[0,4,7,8,9,12,22],content:[12,16,18,24,25,26],continu:[19,22],control:[1,2,18,19,25],controllercollect:1,controllerproviderinterfac:1,convert:[3,17],could:22,count:[0,7],countbi:[0,9],cours:3,creat:[0,1,2,4,6,8,9,12,17,19,20,21,22,23,24,25,26],created_at:[4,6,19,22],createdata:[2,10],createdefinit:12,createempti:[0,9],createentitydefinit:[5,6],createfil:[0,8,9,13,21],creation:[0,1,6,16,17,19,21],crud:[1,4,5,6,12,16,17,19,20,21,22,23,24,25,26],cruddata:1,cruddatafactoryinterfac:22,crudfil:12,crudlexamazons3fileprocessor:16,crudlexsampl:19,crudlexus:16,crudmysqldata:22,crudusersetup:17,css:24,current:[1,4,6,9,12,18,20,22,25],cursor:24,cut:20,danger:24,data:[0,1,2,3,4,7,8,9,12,16],databas:[2,3,9,10,18,19,21,23,25],datafactori:[12,17,20,22,25],datasourc:[0,9],date:[7,12,16],datefield:26,datepick:24,datetim:[7,12,16,19],datetimefield:26,datetimepick:24,dbal:[9,10],dbname:25,decim:20,declar:[19,20],defens:[13,20],defin:[0,3,4,9,12,18,19,20,21,24,25],definit:[0,1,2,3,4,7,9,10,12,16,18],delet:[0,1,4,8,9,13,16,19],deletecascad:[0,4,9,20],deletechildren:9,deleted_at:[4,19,22],deletefil:[0,1,8,9,13,21],deletion_failed_ev:[0,9],deletion_failed_still_referenc:[0,9],deletion_success:[0,9],depend:[3,12],deriv:22,descend:[0,9,22],describ:[16,17,19,20,23],descript:[4,16,17],desir:[12,17,22,24],detail:[1,4,20,22,23],determin:12,differ:20,dir:20,directli:[19,21,26],disabl:22,discuss:25,dismiss:24,displai:[4,12,16,19,20],div:24,doctrin:[9,10],doctrineserviceprovid:25,dodelet:[0,9],doesn:[13,20,21],dolor:20,don:[4,20,24,26],dot:[20,24],doubl:[12,20],driver:16,dropdown:0,due:[0,9],dure:5,each:[0,9,12,17,19,23,24,26],ead:23,easi:[16,18,23],easili:22,edit:[1,4,20,23,24,26],editpag:22,effect:12,either:[0,1,9,12,18,20],element:[4,20],elet:23,els:[0,3,12,22],empti:[0,9,12],endblock:24,endfor:24,endif:24,entiti:[0,1,2],entitydefinit:[0,1,2,3],entitynam:[0,8,9,13],entiydefinitionfactoryinterfac:5,entri:[0,4,9,12,19,22,23],error:[1,7],etc:[17,23],even:21,event:[0,9,16,17],ever:13,everi:[16,21,22],exact:19,exactli:23,exampl:[3,12,18,19,20,21,22,24,25,26],except:12,exclud:4,excludedelet:[0,9],execut:[0,9,21],exist:[0,4,8,9,12,18,19,26],exlud:4,expect:1,expectedvers:7,extend:16,factori:[1,10,12],fail:[0,1,7,9,12],fall:20,fals:[0,1,9,10,12,17,20,21,22],far:[19,26],featur:16,fetch:[0,9],fetchrefer:[0,9],fetchreferencesforfield:9,few:20,field:[0,1,3,4,5,6,7,8,9,12,13,15,16,17,18],fieldlabel:26,fieldnam:4,fieldstructur:[4,6],fieldtorul:7,file:[0,1,2,4,8,9,12,13,14,16,17],filefield:26,fileinfo:16,filenam:[12,14],filepath:20,fileprocessor:[0,2,9,10,12,17,20],fileprocessorinterfac:[0,2],filesystem:20,fill:[18,20],filter:[0,1,4,9,16],filteract:1,filteroper:[0,1,9],filtertous:1,find:26,fire:[0,9],firewal:17,first:[0,9,17,19,21,22,24,25],fit:12,fix:[0,4,9,16],fixedfield:26,fixedvalu:20,flag:[9,10],flash:[1,24],flashbag:24,flashtyp:24,flashtypeavail:24,flexibl:[6,23],floatfield:26,floatstep:20,folder:24,follow:[17,24,25],foo:20,footer:[24,26],forc:20,foreign:16,forget:20,form:[16,20],format:12,formatd:12,formatdatetim:12,formatfloat:12,formattim:12,found:1,from:[0,3,7,8,9,12,16,17,20,21,22],fulfil:0,full:[0,9,20],fullfil:0,further:[20,25],futur:25,gener:[1,9,14,16,17,23,24],generateuuid:9,get:[0,1,3,4,9,12,17,19,20,21,22,24],getafterdeleteredirectparamet:1,getchildren:4,getchildrenlabelfield:4,getdata:[12,17,21],getdefinit:[0,3,9],getdescript:4,geteditablefieldnam:4,getent:12,getfieldlabel:4,getfieldnam:4,getfieldvalu:4,getfilepath:4,getfilt:4,getfilteredfieldnam:4,getfixedvalu:4,getfloatstep:4,getinitialsortfield:4,getinvaliddetail:[11,15],getlabel:4,getlanguagenam:12,getlistfield:4,getlocal:12,getlocalelabel:12,getnotfoundpag:1,getpages:4,getpath:13,getpublicfieldnam:4,getraw:3,getreadonlyfield:4,getrefer:[0,9],getreferenceent:4,getreferencenamefield:4,getreferencet:4,getreferencevalu:4,getserviceprovid:4,getsetitem:4,getstreamedfilefunct:14,gettabl:4,gettempl:12,getter:12,gettyp:4,give:[20,26],given:[0,3,4,5,7,9,12,13,14,20,21],global:16,goe:12,gone:20,good:[12,19,23,24,26],got:19,green:20,guid:[22,25],had:20,hand:[2,6,12,17,22],handl:[1,8,17,20,21],hard:23,haschildren:9,hash:[17,21],have:[0,4,9,17,18,19,20,22,23,24,25,26],head:24,header:[0,8,9,24,26],here:[0,8,9,17,19,20,22],hide:19,hierarchi:24,hint:16,hold:[0,1,3,4,9,10,12,13],host:25,how:[3,17,21,22,24],http:[0,1,8,9,12,19,20,25],hydrat:[0,9],i18n:[1,12,16],imag:20,implement:[1,2,3,5,9,10,12,13,16,19,20],implicit:4,includ:[0,4,8,9,16,24],increment:16,index:[16,20],inform:[19,22],inheritdoc:[5,9,10,11,13,15],init:12,initchildren:12,initi:[4,12,16,17],initialsortascend:[4,22],initialsortfield:[4,22],initlocal:12,initmissingserviceprovid:12,input:[1,3],inset:7,instanc:[0,1,2,4,6,7,9,10,12,17,20,24,25],instanti:17,instead:[16,21],integ:[0,1,3,4,7,9,16,19],integerfield:26,interfac:[2,6,8,17],intern:[4,17,22,25,26],interrupt:21,intfield:26,introduct:16,invalid:[1,3,4,12],ipsum:20,isconstraint:4,isdeletecascad:4,isinitialsortascend:4,ismanagingi18n:12,isn:9,isrequir:4,isuniqu:4,isutc:12,isvalid:[11,15],item:[4,19],itself:[24,25],javascript:24,jqueri:24,json:25,just:[0,4,6,8,9,18,22,24,26],kei:[0,3,4,5,6,7,9,10,12,16,19],kept:25,known:24,label:[4,5,6,12,16,17,18,19,20],label_:22,label_d:22,lambda:14,languag:12,last:[19,20,21],later:25,latest:[0,9],layer:25,layout:[12,16],lead:20,least:1,let:[17,19],level:[22,24],lib:[18,20],librari:[17,18,19,20,21,22],like:[0,3,4,6,8,9,12,20,21,22,24,25,26],line:20,linebreak:20,link:[12,19,22,24],list:[0,1,4,12,16,20,21],listentri:[0,1,9],listfield:[4,22],listview:[4,22],local:[1,4,6,12,22],locale_fallback:22,localelabel:[4,5,6],lock:[1,7,19],longer:20,longtext:20,look:[3,20,24],lorem:20,lot:23,mail:21,make:[6,22],manag:[2,12,16,17],managei18n:[12,22],mandatori:18,mani:[20,21],manual:[12,16],map:[1,7,12],margin:24,mark:22,master:17,matter:3,maximum:[0,9],mayb:4,meant:17,mechan:[19,20],mediumint:20,mediumtext:20,menu:24,messag:19,method:[1,9],might:[12,21,22,23],mimetyp:[0,8,9],minim:[19,23,25],miss:12,mix:[1,3,4],mode:1,modif:[1,21],modifi:21,modifyent:1,modifyfilesandsetflashbag:1,moment:[0,9,21,24],more:[17,19,20,21,22,24,25],most:[23,24],mount:[19,25],multi:20,multilin:16,multilinefield:26,must:[0,9,21],myauthor:22,mybooklayout:24,mycreatebooklayout:24,myfileprocessor:20,mylayout:24,myownentitydefinitionfactori:22,myshowlayout:24,mysql:[9,16,19],mysqldata:0,mysqldatafactori:2,name:[0,1,4,8,9,12,13,18,19,20,22,23,24,25],namefield:[0,9,17,18,20],navig:19,need:[12,17,18,20,23,24,26],net:12,newli:[0,2,8,9],next:[22,23,25],notat:12,note:[18,19,22,26],noth:12,now:[13,19,20,25],number:22,object:[3,21,25],off:[12,16],offer:[1,4,12,17,22,23],often:[22,23],onli:[1,4,7,19,20,22,23,25],oper:[0,1,17],optimist:[1,7,19],optimisticlock:1,option:[20,22,25],order:[0,4,9,12,17,20,21,22,24],other:[4,20],otherent:20,othernam:20,othert:20,our:[18,19,20],output:[0,8,9,14],overrid:[16,20],own:16,packag:[20,22],page:[1,4,16,19,20],pages:[4,22],pagin:[9,16],pair:3,panel:16,param:[0,9],paramet:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,20,21],paramsoper:[0,9],parent:20,pars:12,part:[17,26],pass:[3,7],password:[17,21,25],path:[4,13,19,24],pattern:12,pdate:23,pecl:16,per:[4,18,19,22],perform:[0,7,9,17],performonfil:[0,9],persist:0,philiplb:[24,25],php:[12,16,20],physic:20,picker:24,place:[19,24],plu:[17,24],point:[0,9,23,24,26],pointer:24,pop:[0,9],popev:[0,9,21],popul:[3,17],populateviarequest:3,possibl:22,post:1,postprocess:1,prefil:[0,9,16],prefix:24,prepend:24,present:22,previou:19,primari:[9,10,16],process:[0,9],processor:[0,2,9,12],profil:16,project:[17,19,22],proper:20,properti:[0,3,4,7,9,10,12,13,24],protect:[0,3,4,7,9,10,12,13],provid:[2,4,6,7,12,17,22,24,25],push:21,pushev:[0,9,21],queri:9,querybuild:9,quick:[7,23],raw:[0,3,7,9],react:21,read:[0,4,12],readabl:17,readyaml:12,real:20,reat:23,recommend:[20,24],red:20,redirect:1,redirectpag:1,refer:[0,1,4,7,9,11,16,17,18],referenc:[0,4,9,20,22],referencefield:26,refus:20,regist:[12,17,20,21,22,24,25],registr:[5,6,22],rel:20,relat:20,relationship:20,reli:25,remov:[0,9,20,21],render:[0,1,8,9,24,26],renderfield:26,renderfil:[0,1,8,9,13],replac:20,repres:[3,20],represent:20,request:[0,3,8,9,13],requir:[4,7,16,17,18],resolv:24,resourc:1,respons:[0,1,8,9,14],rest:[20,26],result:[0,12],retriev:[0,20],root:26,rout:1,row:[0,3,9,18,19,22],rule:7,sadipsc:20,sai:[3,19],salt:17,same:[0,4,18,19,23],sampl:19,save:[1,20,21],scientif:12,scratch:16,search:[16,22],second:[17,19],section:[12,24,25],secur:17,securityserviceprovid:17,see:[0,2,3,4,7,9,10,12,13,19],seiten:22,select:[0,20,26],sens:22,serv:1,servic:[2,4,6,12,24],serviceprovid:[2,4,5,6],serviceproviderinterfac:12,session:24,set:[0,1,3,4,7,8,9,12,16,17],setchildrenlabelfield:4,setdeletecascad:4,setdescript:4,setfield:26,setfieldlabel:4,setfieldvalu:4,setfilepath:4,setfilt:4,setfixedvalu:4,setfloatstep:4,setinitialsortascend:4,setinitialsortfield:4,setitem:20,setlabel:4,setlistfield:4,setlocal:[1,4,12],setmethod:9,setpages:4,setrequir:4,setserviceprovid:4,setsetitem:4,settabl:4,settyp:4,setuniqu:4,setup:[1,12,16,20,21,22,23],setupi18n:1,setuprout:1,setuptempl:1,setvalidationfailedflash:1,setvalu:9,setvaluesandparamet:9,sever:17,shorten:[12,20],should:[0,4,18,21,24,25],shouldexecuteev:[0,9],show:[1,12,16],showlist:1,shown:20,side:20,signatur:[0,9,21],silex:[1,12,16,17,22,23,24,25],silexcontrollercollect:1,simpl:[19,22],simplefilesystemfileprocessor:8,simpli:[13,17,26],singl:[1,3,4,7,16,19,20],sit:20,situat:21,size:[0,4,8,9,20],skip:[0,9],small:[14,19],smallint:20,soft:[0,19],some:[17,19,22,23,24],someon:21,someth:21,sometim:22,somewher:22,sort:[0,4,9,16],sortascend:[0,9],sortfield:[0,9],space:20,special:22,specif:[0,3,8,9,22,24],specifi:[0,4,26],sql:19,src:[24,26],stand:23,standard:[14,24],standardfieldlabel:[4,5,6],start:[23,24,26],state:4,staticfil:1,statu:1,step:[4,20],still:[9,20,23],stop:[0,9],storag:20,store:[1,4,13,20,21,25],stream:[0,8,9,14],string:[0,1,3,4,6,7,8,9,12,13,14,19,22],structur:[4,16],sub:17,subchapt:24,subchildren:[0,9],subfold:[13,20],success:[0,9,24],support:[18,20,22,25],surround:17,symfoni:17,symfonycomponenthttpfoundationredirectrespons:1,symfonycomponenthttpfoundationrespons:8,system:[12,13],tabl:[0,4,5,6,9],tag:[17,24],take:[0,3,9,21,25],tediou:23,tell:20,templat:[1,12,16,24,25],text:[16,17,18,19],textfield:26,than:[20,22],thei:[0,4,9,20,21,26],them:17,thi:[0,1,2,3,4,7,8,9,12,13,16,17,18,19,20,21,22,23,24,25,26],thing:7,think:20,those:[20,26],though:20,three:[4,20,21],through:25,time:[12,19,20,21,25],timestamp:[19,20],timestr:12,timezon:12,tinyint:20,tinytext:20,titel:22,titl:[18,19,20,22],told:19,too:[0,8,9],tooltip:[20,24],totyp:3,translat:16,translationserviceprovid:22,tri:12,tweak:26,twig:[12,24,26],twigserviceprovid:24,two:[17,18,19,22],txt:20,type:[0,3,4,16,17,18,19],unchang:12,under:19,uniqu:[4,7,15,17,18],until:20,upcom:9,updat:[0,1,8,9,19,21],update_at:22,updated_at:[4,6,19,22],updatefil:[0,8,9,13,21],upload:[0,1,2,8,9,16,17,20],url:[16,19],urlfield:26,usag:22,useful:3,user:2,userbas:17,usernam:17,userprovid:16,userrol:17,usersetup:17,useuuid:[9,10],utc:[12,19],utf8:25,util:14,uuid:[9,10,16],valdivalid:7,valid:[1,3,7,11,15,19],valu:[0,3,4,7,9,11,12,15,16,17,18,20],varchar:[20,22],vari:23,variat:2,variou:[19,24],vendor:24,version:[4,7,17,19,22],via:[6,12,17,20],view:[4,20,22,23,24,26],visit:22,wai:25,want:[2,20,21,22,24,26],web:16,were:[4,21],what:[2,3,9,19,21],whatev:25,when:[4,17,19,22,24],whenev:23,where:[1,4,13,19,20,21,22,23,24],whether:[0,1,4,7,9,10,12,18],which:[1,4,12,14,20,21,25,26],whole:[12,21],within:20,without:20,work:[17,26],would:[19,20,22,24],write:[0,23],wrong:12,www:20,yaml:[4,6,12],yet:[12,22],yml:[12,17,19,20,22,25],you:[17,19,20,21,22,23,24,25,26],your:[12,16,17,19,20,21,22,23],youraccesskei:17,yourbucket:17,yourcrud:[17,20,22,25],yourdbnam:25,yourdbpassword:25,yourdbus:25,yourhost:25,yoursecretaccesskei:17},titles:["CRUDlex\\AbstractData","CRUDlex\\ControllerProvider","CRUDlex\\DataFactoryInterface","CRUDlex\\Entity","CRUDlex\\EntityDefinition","CRUDlex\\EntityDefinitionFactory","CRUDlex\\EntityDefinitionFactoryInterface","CRUDlex\\EntityValidator","CRUDlex\\FileProcessorInterface","CRUDlex\\MySQLData","CRUDlex\\MySQLDataFactory","CRUDlex\\ReferenceValidator","CRUDlex\\ServiceProvider","CRUDlex\\SimpleFilesystemFileProcessor","CRUDlex\\StreamedFileResponse","CRUDlex\\UniqueValidator","Welcome to CRUDlex&#8217;s documentation!","Addons","Constraints","Data Structure Definition","Data Types","Events","Extended Features","Introduction","Overriding Layouts","Setup","Overriding Templates"],titleterms:{"boolean":20,"float":20,"switch":22,abstractdata:0,action:[24,26],addit:26,addon:17,admin:17,auto:22,cascad:20,children:20,combin:22,connect:17,constraint:18,controllerprovid:1,creation:22,crudlex:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16],crudlexamazons3fileprocessor:17,crudlexus:17,data:[19,20],datafactoryinterfac:2,date:20,datetim:20,definit:19,delet:20,descript:22,displai:22,document:16,entiti:[3,19,22,24],entitydefinit:[4,22],entitydefinitionfactori:5,entitydefinitionfactoryinterfac:6,entityvalid:7,event:21,extend:22,featur:22,field:[19,22,26],file:20,fileprocessorinterfac:8,filter:22,fix:20,foreign:20,form:[22,26],from:24,global:24,hint:20,i18n:22,implement:22,includ:26,increment:22,indic:16,initi:22,instead:22,integ:20,introduct:23,kei:[20,22],label:22,layout:[24,26],list:22,manag:22,multilin:20,mysql:20,mysqldata:9,mysqldatafactori:10,off:22,overrid:[24,26],own:[22,24],page:[22,26],pagin:22,panel:17,paramet:22,prefil:22,primari:22,profil:22,refer:20,referencevalid:11,role:17,scratch:24,serviceprovid:12,set:[20,22],setup:25,show:20,simplefilesystemfileprocessor:13,singl:[24,26],sort:22,streamedfilerespons:14,structur:19,tabl:16,templat:26,text:20,translat:22,type:20,uniquevalid:15,url:20,user:17,userprovid:17,uuid:22,valu:22,web:22,welcom:16,your:24}})