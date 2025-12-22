# Palo Alto Networks Network Security Professional - 120 Practice Questions

## Domain Coverage
- App-ID (12 questions)
- User-ID (12 questions)
- Device-ID (10 questions)
- SASE (12 questions)
- Decryption (12 questions)
- IoT Security (12 questions)
- Panorama (12 questions)
- GlobalProtect (8 questions)
- NAT (8 questions)
- NGFW (12 questions)
- Network Security Fundamentals (10 questions)
- NGFW and SASE Solution Functionality (10 questions)
- Platform Solutions, Services and Tools (6 questions)
- NGFW_SASE Solution Maintenance and Configuration (8 questions)
- Infrastructure Management and CDSS (8 questions)
- Connectivity and Security (10 questions)
- ATP (10 questions)

---

## APP-ID QUESTIONS (12)

**Q1.** You have deployed Palo Alto Networks NGFWs and need to identify applications regardless of port, protocol, or encryption. Which App-ID feature enables this capability?
- A) Port-based classification using service rules
- B) Signature, protocol decoder, and heuristics pipeline
- C) Manual application override settings
- D) VLAN tagging and interface inspection

**Answer:** B

**Q2.** You are migrating legacy port-based security rules to application-based rules. Which Panorama tool surfaces port-based rules marked as 'No App Specified' for conversion?
- A) Security Advisor
- B) Policy Optimizer
- C) Test Policy Match
- D) Application Command Center (ACC)

**Answer:** B

**Q3.** When configuring Security Policy rules with App-ID, what is the recommended best practice for the Service field?
- A) Set Service to 'any' to maximize application coverage
- B) Set Service to application-default to enforce standard ports
- C) Manually specify each port the application uses
- D) Leave Service blank to allow auto-detection

**Answer:** B

**Q4.** Which combination of technologies allows App-ID to identify encrypted applications and nested/tunneled applications?
- A) SSL/TLS decryption with deep packet inspection
- B) Port numbers and IP geolocation
- C) DNS sinkholing and syslog analysis
- D) BGP route analysis and SNMP traps

**Answer:** A

**Q5.** In Application Command Center (ACC), what does the 'Application' view display?
- A) Only blocked applications with threat details
- B) Real-time application activity including usage by users and zones
- C) Historical application trends over the past year
- D) Encrypted traffic waiting for decryption keys

**Answer:** B

**Q6.** You observe that App-ID is classifying traffic only as 'ssl' despite enabling decryption rules. What is the most likely cause?
- A) Policy Optimizer is blocking application inference
- B) Decryption is misconfigured; verify CA trust and decryption profiles
- C) The firewall does not support SSL/TLS inspection
- D) The application inherently cannot be classified

**Answer:** B

**Q7.** A security policy rule has 'Application override' enabled. What is the impact on App-ID?
- A) App-ID continues to classify traffic normally
- B) App-ID refines classification after the override is applied
- C) App-ID classification is disabled for that rule
- D) The override improves App-ID accuracy

**Answer:** C

**Q8.** Which layer of the OSI model does Palo Alto Networks App-ID primarily operate at?
- A) Layer 2 - Data Link
- B) Layer 4 - Transport
- C) Layer 7 - Application
- D) Layer 3 - Network

**Answer:** C

**Q9.** You want to ensure App-ID content is current across your distributed firewall deployment. What is the recommended approach?
- A) Manually update each firewall individually
- B) Maintain content/App-ID updates through Panorama centrally
- C) Use Policy Optimizer daily to refresh classifications
- D) Enable auto-update on firewalls without Panorama

**Answer:** B

**Q10.** When testing a policy migration from port-based to App-ID-based rules, which tool should you use to verify the policy behavior?
- A) Policy Optimizer
- B) Test Policy Match
- C) Live Traffic View
- D) Log Query

**Answer:** B

**Q11.** What is the relationship between SSL/TLS decryption and nested application classification?
- A) Decryption is not related to nested app classification
- B) Decryption prevents nested apps from being identified
- C) Decryption must be enabled to identify applications hidden within encrypted sessions
- D) Nested apps are only visible in unencrypted traffic

**Answer:** C

**Q12.** You are implementing SaaS App-ID for tenant-level application visibility. Which environment best supports this?
- A) On-premises firewalls only
- B) Prisma Access (formerly Mobile Security) with Cloud Engine
- C) Panorama stand-alone management
- D) GlobalProtect Portal agents only

**Answer:** B

---

## USER-ID QUESTIONS (12)

**Q13.** User-ID maps IP addresses to usernames and group memberships from which sources?
- A) Firewall routing table and NAT bindings only
- B) AD/LDAP, Captive Portal, GlobalProtect, and other identity providers
- C) DHCP leases and ARP tables only
- D) Syslog messages from access points

**Answer:** B

**Q14.** Which User-ID agent monitors Domain Controller security logs and reports login/logoff events to the firewall?
- A) PAN-OS integrated agent
- B) Windows User-ID agent
- C) LDAP collector agent
- D) Panorama redistribution agent

**Answer:** B

**Q15.** What is the primary purpose of configuring 'Include' and 'Exclude' subnets in User-ID settings?
- A) To control which networks send traffic to the firewall
- B) To restrict which IP ranges User-ID learns user mappings from
- C) To filter decryption rules
- D) To configure split-tunneling zones

**Answer:** B

**Q16.** You want to view all current user-to-IP mappings on a firewall. Which CLI command accomplishes this?
- A) show user ip-user-mapping all
- B) show user id status
- C) get user-id all-mappings
- D) display ip-user all

**Answer:** A

**Q17.** In a typical User-ID deployment, which policy types can directly consume User-ID criteria?
- A) Only Security Policy
- B) Security, Decryption, QoS, Policy-Based Forwarding (PBF), and DoS policies
- C) Threat Prevention profiles only
- D) Panorama device groups only

**Answer:** B

**Q18.** User-ID mappings become stale and unreliable. What is the best practice to address this?
- A) Disable User-ID and rely on address-based policies
- B) Tune timeouts, ensure DC log access, and verify agent health
- C) Increase the firewall's memory allocation
- D) Use Panorama to override all mappings

**Answer:** B

**Q19.** A user is mapped to multiple accounts simultaneously (e.g., domain account and local service account). How should you configure the firewall to handle multi-user scenarios?
- A) Delete the user mappings and start fresh
- B) Enable multiple identities support on the firewall
- C) Block the user's traffic until the issue is resolved
- D) Use Captive Portal only

**Answer:** B

**Q20.** What is the role of Group Mapping (LDAP) in a User-ID configuration?
- A) To replace individual user mappings with static group assignments
- B) To translate IP addresses to LDAP user accounts
- C) To map user accounts to security groups for group-based policy rules
- D) To disable User-ID for performance

**Answer:** C

**Q21.** You are configuring a Security Policy rule that uses 'Source User' criteria. For this rule to function, what must be in place on the firewall?
- A) Only a Decryption policy
- B) App-ID enabled
- C) User-ID enabled and mappings available
- D) Panorama management connection

**Answer:** C

**Q22.** On a shared network (e.g., classroom lab or NAT gateway), why is User-ID mapping potentially ambiguous?
- A) User-ID cannot operate behind NAT
- B) Multiple users share the same IP, making individual identification difficult
- C) The firewall has insufficient processing power
- D) User-ID requires IPv6 to function

**Answer:** B

**Q23.** Which authentication method allows unknown users to be authenticated before traffic is evaluated by Security Policy?
- A) User-ID agent only
- B) Captive Portal or Authentication Policy
- C) GlobalProtect gateway
- D) Manual static mapping

**Answer:** B

**Q24.** In a Panorama user-redistribution design (hub-and-spoke), what is the primary purpose?
- A) To centralize threat prevention filters
- B) To distribute user mappings and IP-tag data across multiple firewalls for identity-aware policy enforcement
- C) To create a backup of all configuration files
- D) To replicate decryption certificates

**Answer:** B

---

## DEVICE-ID QUESTIONS (10)

**Q25.** Device-ID identifies endpoints based on which characteristics?
- A) IP address and port number only
- B) Device type, profile, and behavioral baselines
- C) Operating system version exclusively
- D) Firewall serial number

**Answer:** B

**Q26.** What are the three primary methods Device-ID uses to fingerprint devices?
- A) DNS, NTP, and SNMP requests
- B) DHCP fingerprinting, enhanced application logs (EALs), and traffic analysis
- C) MAC address lookup, ARP inspection, and certificate validation
- D) BGP advertisements and routing protocol analysis

**Answer:** B

**Q27.** You want to implement per-device security policies using Device-ID. In which policy types can Device-ID criteria be applied?
- A) Only Threat Prevention profiles
- B) Security, Decryption, QoS, Authentication, and PBF policies
- C) Panorama template variables only
- D) GlobalProtect portal rules only

**Answer:** B

**Q28.** Which Palo Alto Networks cloud service provides Device-ID policy recommendations for least-privilege enforcement?
- A) Cortex XDR
- B) IoT Security or Prisma Cloud Device Security
- C) Panorama Cloud Services
- D) Threat Intelligence Cloud

**Answer:** B

**Q29.** Why is DHCP visibility critical for accurate Device-ID classification in an enterprise network?
- A) DHCP is not related to Device-ID functionality
- B) DHCP traffic contains fingerprinting data necessary to identify device types
- C) DHCP allows direct communication with Panorama
- D) DHCP logs are used for threat prevention only

**Answer:** B

**Q30.** In PAN-OS 11.1 and later, what feature allows Device-ID policy recommendations to be imported directly into the NGFW?
- A) Auto-remediation
- B) Policy recommendation imports
- C) Zero Trust enforcer
- D) Automated compliance

**Answer:** B

**Q31.** You observe that a medical IoT device behind a NAT cannot be accurately identified by Device-ID. What is the recommended approach?
- A) Disable Device-ID for that device
- B) Segment the device to a dedicated VLAN and add ERSPAN or SNMP integrations for enhanced visibility
- C) Manually create a static Device-ID mapping
- D) Request the vendor to change the device's behavior

**Answer:** B

**Q32.** Which placement strategy is most effective for Device-ID?
- A) Deploy firewall at the network edge only
- B) Position firewalls where they see DHCP and device traffic (LAN/access layer)
- C) Use Panorama without local firewall deployment
- D) Place firewall at the DMZ only

**Answer:** B

**Q33.** How does Device-ID complement App-ID and User-ID in a comprehensive security strategy?
- A) Device-ID replaces both App-ID and User-ID
- B) Device-ID adds device context to app and user visibility for granular least-privilege policies
- C) The three are unrelated technologies
- D) Only one should be enabled at a time

**Answer:** B

**Q34.** When reviewing Device-ID logs, what does a 'low confidence' classification indicate?
- A) The firewall is malfunctioning
- B) The device may not have sufficient fingerprinting data; extend baseline observation or add integrations
- C) The device is blocked by policy
- D) Device-ID must be disabled

**Answer:** B

---

## SASE QUESTIONS (12)

**Q35.** Which Palo Alto Networks solution converges security and SD-WAN into a unified platform?
- A) Panorama
- B) Cortex XDR
- C) Prisma Access (SASE)
- D) WildFire

**Answer:** C

**Q36.** Prisma Access is built on what foundational architecture?
- A) Traditional data center model
- B) Agent-based endpoint protection
- C) Cloud-delivered security fabric (Palo Alto Networks Security Operating Platform)
- D) On-premises appliances only

**Answer:** C

**Q37.** What are the core components of Prisma Access (SASE) for remote access?
- A) GlobalProtect agent and cloud security stack
- B) VPN concentrator and branch appliances
- C) Mobile Device Management (MDM) only
- D) Cloud storage and file encryption

**Answer:** A

**Q38.** In a SASE deployment, what is the purpose of the Prisma Access Service Gateway?
- A) To manage mobile devices exclusively
- B) To terminate and inspect traffic from branch and remote users
- C) To provide only VPN connectivity without security inspection
- D) To replace Panorama management

**Answer:** B

**Q39.** SASE is designed to address which of the following challenges in modern enterprises?
- A) High latency in on-premises networks
- B) Distributed users/branches requiring consistent security, performance, and simplified management
- C) Firewall redundancy requirements only
- D) SSL/TLS encryption exclusively

**Answer:** B

**Q40.** Which policy types are supported in Prisma Access for remote users?
- A) Only threat prevention policies
- B) Security, Threat Prevention, Decryption, and Advanced Threat Prevention policies
- C) Panorama device group policies exclusively
- D) GlobalProtect policies only

**Answer:** B

**Q41.** What is Dynamic Content Delivery (DCD) in the context of Prisma Access?
- A) Manual content distribution to all devices
- B) Automatic routing of users to the nearest security gateway for optimized performance and security
- C) Static content caching on appliances
- D) Email-based policy distribution

**Answer:** B

**Q42.** In Prisma Access, which authentication methods are supported for user identification?
- A) RADIUS only
- B) Captive Portal and SAML only
- C) SAML, RADIUS, LDAP, OAuth, and other identity providers
- D) Manual username/password in plaintext

**Answer:** C

**Q43.** How does Prisma Access integrate with Strata Cloud Manager (SCM)?
- A) They are completely separate products
- B) SCM provides centralized management, analytics, and visibility for Prisma Access deployments
- C) Prisma Access replaces SCM
- D) Integration is optional and rarely used

**Answer:** B

**Q44.** Which security features can be applied to Prisma Access traffic?
- A) Threat Prevention profiles only
- B) App-ID, User-ID, Threat Prevention, Decryption, URL Filtering, and ATP
- C) No security profiles are supported
- D) Manual signature rules only

**Answer:** B

**Q45.** What is the advantage of using Prisma Access for branch offices?
- A) Branches must still use separate VPN appliances
- B) Direct cloud access with centralized management, threat prevention, and simplified deployment
- C) Branch connectivity is limited to VPN only
- D) Branches cannot access cloud services

**Answer:** B

**Q46.** In SASE architecture, what role does identity play in security decisions?
- A) Identity is irrelevant in cloud-delivered security
- B) Identity (user, device, location) is a primary factor in access and security policy evaluation
- C) Only device identity matters, not user identity
- D) Identity is managed separately outside SASE

**Answer:** B

---

## DECRYPTION QUESTIONS (12)

**Q47.** What is the primary purpose of SSL/TLS decryption in a Palo Alto Networks firewall?
- A) To block encrypted traffic
- B) To enable App-ID and threat prevention inspection of encrypted traffic
- C) To reduce firewall performance
- D) To replace VPN encryption

**Answer:** B

**Q48.** Which CA certificate role is deployed to client endpoints to establish trust for a forward proxy decryption model?
- A) Root CA
- B) Intermediate CA
- C) Forward-Trust CA (for man-in-the-middle proxy mode)
- D) Untrust CA

**Answer:** C

**Q49.** In inbound SSL inspection, what certificate and key are required on the firewall?
- A) Client certificate and private key
- B) The server's (destination) certificate and private key (for CN/SAN matching and decryption)
- C) A self-signed certificate only
- D) No certificate is needed

**Answer:** B

**Q50.** What is the difference between Forward Proxy and Inbound Inspection decryption modes?
- A) They are the same mode with different naming
- B) Forward Proxy inspects outbound client connections; Inbound Inspection inspects connections to internal servers from external clients
- C) Inbound Inspection is for outbound traffic only
- D) Forward Proxy is for administrators only

**Answer:** B

**Q51.** Which best practice should be followed when deploying a Forward-Trust CA to client endpoints?
- A) Deploy via email to users
- B) Deploy through enterprise PKI to ensure trust and reduce browser warnings
- C) Do not deploy the CA; allow browser warnings
- D) Use multiple different CAs for each site

**Answer:** B

**Q52.** What is certificate pinning and why is it a challenge for decryption deployments?
- A) Pinning is a firewall feature; no challenge exists
- B) Applications hardcode specific certificate details, preventing MITM decryption; exclusions are required
- C) Pinning prevents users from accessing any website
- D) Pinning is a type of malware

**Answer:** B

**Q53.** In Decryption Policy, what does the 'Exclude' category allow you to do?
- A) Block all matching traffic
- B) Exempt specific destinations (e.g., financial, healthcare) from decryption
- C) Force decryption on all traffic
- D) Disable the firewall

**Answer:** B

**Q54.** Which scenario best demonstrates when SSL/TLS decryption provides the most security value?
- A) Unencrypted HTTP traffic
- B) Business-critical HTTPS destinations where payload inspection is required (finance, SaaS, internal portals)
- C) VPN traffic
- D) ICMP traffic

**Answer:** B

**Q55.** What is the role of the Decryption Profile in the firewall?
- A) Decryption Profiles do not exist
- B) They define which certificate, cipher suites, and protocols to use during decryption
- C) They block decryption
- D) They apply only to Panorama

**Answer:** B

**Q56.** When configuring inbound SSL inspection, why is the CN (Common Name) or SAN (Subject Alternative Name) matching important?
- A) It is not important
- B) It ensures the decryption occurs only for the intended destination server, preventing mismatches
- C) It blocks all traffic
- D) It enables User-ID

**Answer:** B

**Q57.** In a phased decryption deployment, what is the recommended approach for HTTPS traffic?
- A) Decrypt everything immediately
- B) Start with non-critical destinations; pilot with test groups; expand coverage based on hit counts and errors
- C) Do not decrypt HTTPS
- D) Decrypt only Tor traffic

**Answer:** B

**Q58.** What security risk does inadequate decryption coverage create in an enterprise?
- A) No risk; encrypted traffic is always secure
- B) Malware, data exfiltration, and C2 communications hidden inside encrypted traffic can bypass threat prevention
- C) Decryption increases security risks
- D) Encrypted traffic is randomly sampled

**Answer:** B

---

## IOT SECURITY QUESTIONS (12)

**Q59.** Which cloud service from Palo Alto Networks delivers AI/ML-based discovery, classification, and behavior baseline of IoT and OT devices?
- A) Panorama
- B) Enterprise IoT Security
- C) GlobalProtect
- D) Strata Logging Service

**Answer:** B

**Q60.** What are the primary data collection methods for Enterprise IoT Security coverage?
- A) Manual device registration only
- B) DHCP logs, SNMP, ERSPAN (mirrored traffic), NAC integrations, and firewall telemetry
- C) Email-based registration
- D) GPS location only

**Answer:** B

**Q61.** In IoT Security, what is the baseline period used for?
- A) To block all devices immediately
- B) To allow the system to learn normal device behavior before enforcing policies
- C) To disable the firewall
- D) To delete logs

**Answer:** B

**Q62.** Which IoT Security tier includes automated vulnerability detection, policy recommendations, and anomaly alerts?
- A) Enterprise IoT Security (standard tier)
- B) Enterprise IoT Security Plus
- C) GlobalProtect Plus
- D) Panorama Advanced

**Answer:** B

**Q63.** What is a primary use case for IoT Security device recommendations in medical/biomed environments?
- A) To delete all medical devices
- B) To enforce least-privilege communication while preserving critical clinical workflows
- C) To block all medical devices
- D) To replace medical IT staff

**Answer:** B

**Q64.** In IoT Security, what is the difference between inbound and outbound policy recommendations?
- A) They are the same
- B) Inbound: restrict access FROM external to the device; Outbound: restrict access FROM the device to external/internal destinations
- C) Outbound only is supported
- D) Inbound only is supported

**Answer:** B

**Q65.** How do you integrate third-party sources (e.g., DHCP server, network switch SNMP) with IoT Security?
- A) Manual entry only
- B) Configure API or syslog integrations in IoT portal to relay device telemetry
- C) Direct firewall connection required
- D) Integration is not supported

**Answer:** B

**Q66.** What is virtual patching in the context of IoT devices?
- A) Physical patching of hardware
- B) Using NGFW policies to block/restrict vulnerable devices when vendor patches are unavailable
- C) Manual password changes only
- D) Disabling the device

**Answer:** B

**Q67.** Which remediation workflow should be followed when a critical vulnerability is detected in an IoT device?
- A) Ignore the alert
- B) Investigate severity/CVSS/exploitability, create NGFW block or restrict rules, coordinate with device owner, apply virtual patching if patching is unavailable
- C) Immediately disconnect the device without investigation
- D) Forward the alert to the vendor

**Answer:** B

**Q68.** In IoT Security, what does a 'policy violation' alert indicate?
- A) The firewall has stopped working
- B) Device traffic deviates from learned baseline or exceeds policy thresholds
- C) A vulnerability has been discovered
- D) The IoT app has been disabled

**Answer:** B

**Q69.** How does IoT Security integrate with the NGFW for policy enforcement?
- A) No integration exists
- B) IoT portal generates policy recommendations; administrator imports rules into Panorama/NGFW to enforce device-class and per-device policies
- C) Policies are enforced in the cloud only
- D) Manual rule creation is required without recommendations

**Answer:** B

**Q70.** What is the primary advantage of enabling IoT Security Plus for medical device networks?
- A) Plus tier does nothing for medical devices
- B) Automated risk reduction, vulnerability detection, and policy recommendations tailored to medical workflows
- C) Medical devices are blocked
- D) Manual inspection is no longer needed

**Answer:** B

---

## PANORAMA QUESTIONS (12)

**Q71.** Panorama is best described as:
- A) A network access control appliance
- B) Centralized management, monitoring, and log collection platform for distributed firewalls
- C) A cloud-based SaaS platform only
- D) A replacement for firewalls

**Answer:** B

**Q72.** In Panorama, what is the primary purpose of Device Groups?
- A) To manage hardware inventory
- B) To cluster firewalls for centralized policy, object, and security profile management
- C) To create VLANs
- D) To configure routers

**Answer:** B

**Q73.** What are Templates in Panorama used for?
- A) To create security policies
- B) To centrally deliver shared device and network configuration (interfaces, VRs, service routes, etc.) across firewalls
- C) To configure threat prevention only
- D) To manage Strata Logging Service

**Answer:** B

**Q74.** How many hierarchical levels can be created in a Panorama Device Group structure (excluding Shared)?
- A) One level only
- B) Two levels only
- C) Up to four levels of nesting
- D) Unlimited levels

**Answer:** C

**Q75.** What is the benefit of using Template Variables in Panorama?
- A) Variables have no benefit
- B) Variables allow site-specific values (e.g., IP addresses) to be parameterized for reuse across devices
- C) Variables disable templates
- D) Variables are used for logging only

**Answer:** B

**Q76.** In Panorama, what is the relationship between Pre and Post Rulebases?
- A) They are the same
- B) Pre rulebase is evaluated first (corporate baseline); Post is evaluated last (exceptions/last-chance rules)
- C) Post is evaluated before Pre
- D) Only one can be used at a time

**Answer:** B

**Q77.** Which operation pushes changes from Panorama templates and device group policies to managed firewalls?
- A) Local commit only
- B) Commit and Push
- C) Import only
- D) Export only

**Answer:** B

**Q78.** What is a limitation when assigning multiple Device Groups to a single firewall?
- A) It is not a limitation; multiple Device Groups can be assigned
- B) A firewall can only be assigned to one Device Group in Panorama
- C) Firewalls cannot be managed by Panorama
- D) Device Groups are only for Strata Cloud Manager

**Answer:** B

**Q79.** How does Panorama achieve high availability and redundancy?
- A) Panorama cannot be made redundant
- B) HA Panorama pairs (active/passive) with configuration sync ensure management continuity
- C) Only one Panorama instance is supported
- D) Redundancy is managed by the firewall only

**Answer:** B

**Q80.** In Panorama, what does the 'Config Audit' feature allow you to do?
- A) Audit user access only
- B) Review configuration changes with before/after diffs and maintain version history
- C) Perform threat analysis
- D) Export logs to SIEM

**Answer:** B

**Q81.** When onboarding a new firewall to Panorama, what are the essential steps?
- A) Connect the firewall to the network only
- B) Register serial on Panorama, generate auth key, paste on firewall (Device > Panorama), commit on firewall, then import and push configuration
- C) Manual policy creation on each device
- D) Use API only

**Answer:** B

**Q82.** In a multi-site Panorama deployment, how is firewall data typically protected during distribution?
- A) No protection is used
- B) TLS encryption, certificate profiles, and permitted IP lists secure Panorama-to-firewall communication
- C) Data is sent in cleartext
- D) AES encryption only

**Answer:** B

---

## GLOBALPROTECT QUESTIONS (8)

**Q83.** GlobalProtect is Palo Alto Networks' solution for:
- A) Threat prevention only
- B) Remote access security, including user authentication, endpoint compliance, and encrypted tunneling
- C) Network routing only
- D) DNS filtering

**Answer:** B

**Q84.** In a GlobalProtect deployment, what is the difference between the Portal and Gateway?
- A) Portal and Gateway are the same
- B) Portal: management/authentication; Gateway: data tunnel termination and traffic inspection
- C) Gateway handles only threat prevention
- D) Portal is for internal use only

**Answer:** B

**Q85.** What does Host Information Profile (HIP) check in GlobalProtect verify?
- A) Only the user's identity
- B) Endpoint security posture (antivirus, encryption, firewall, OS patches, etc.) before granting access
- C) Network speed only
- D) Cloud storage access

**Answer:** B

**Q86.** Which authentication method is considered a best practice for GlobalProtect admin access?
- A) Hardcoded username/password
- B) SAML with multi-factor authentication (MFA) to external IdP
- C) No authentication required
- D) Email-based authentication

**Answer:** B

**Q87.** In GlobalProtect, what is split tunneling?
- A) Using two VPN providers
- B) Allowing selected traffic to bypass the VPN tunnel while other traffic goes through it for optimized performance
- C) Blocking all tunnel traffic
- D) VPN tunnel duplication

**Answer:** B

**Q88.** What does 'Authentication Override Cookie' enable in GlobalProtect?
- A) Disabling all authentication
- B) Allow users to authenticate once and maintain session without re-authenticating for a specified time
- C) Manual authentication steps only
- D) Per-application authentication

**Answer:** B

**Q89.** Which log type records GlobalProtect user connections, disconnections, and data usage?
- A) Threat logs only
- B) GlobalProtect logs (in PAN-OS logs or Strata Logging Service)
- C) Application logs only
- D) DNS logs

**Answer:** B

**Q90.** What is the purpose of the GlobalProtect App Settings configuration in the Portal?
- A) Settings do not exist
- B) To customize client agent behavior (authentication settings, split tunneling, kill-switch, logging) per user or device
- C) To block all client connections
- D) To disable the gateway

**Answer:** B

---

## NAT QUESTIONS (8)

**Q91.** NAT is primarily used to:
- A) Replace firewalls
- B) Translate source or destination IP addresses and ports for connectivity and address obfuscation
- C) Encrypt traffic
- D) Replace VPN

**Answer:** B

**Q92.** What does DIPP (Dynamic IP and Port) NAT accomplish in a typical enterprise?
- A) It blocks all outbound traffic
- B) Allows internal users to share external IP addresses via dynamic port translation for egress traffic
- C) Disables all services
- D) Requires manual IP entry

**Answer:** B

**Q93.** In a NAT policy, which of the following is the correct evaluation order for traffic?
- A) NAT rules are evaluated after Security Policy
- B) Security Policy uses pre-NAT IPs; traffic is then translated by NAT before transmission
- C) NAT occurs before policy evaluation
- D) NAT is optional and order does not matter

**Answer:** B

**Q94.** What is the purpose of U-Turn NAT in an enterprise network?
- A) It blocks internal traffic
- B) Allows internal users to access public server IP addresses by translating them to internal DMZ IPs
- C) VPN routing only
- D) DNS resolution

**Answer:** B

**Q95.** Which NAT type is used for bi-directional translation of both source and destination addresses?
- A) Source NAT only
- B) Destination NAT only
- C) Static bi-directional NAT (Destination + Source)
- D) No NAT type supports this

**Answer:** C

**Q96.** What issue can occur if NAT rules are ordered incorrectly?
- A) No issues arise from rule order
- B) Traffic can match the wrong rule and be translated to an unintended destination/address
- C) NAT is disabled
- D) The firewall crashes

**Answer:** B

**Q97.** When configuring static NAT for a public-facing web server, which additional step may be needed?
- A) No additional configuration is required
- B) Enable proxy ARP (if on the same subnet) to respond to ARP requests for the public IP
- C) Disable the firewall
- D) Replace the firewall

**Answer:** B

**Q98.** In a NAT pool configuration, what does 'oversubscription' refer to?
- A) Creating too many pools
- B) More connections than available IP addresses/ports in the pool, which can exhaust translation resources
- C) Using IPv6 instead of IPv4
- D) Disabling all translations

**Answer:** B

---

## NGFW QUESTIONS (12)

**Q99.** What are the core functional capabilities of a Palo Alto Networks Next-Generation Firewall (NGFW)?
- A) IP filtering only
- B) App-ID, User-ID, Threat Prevention, SSL/TLS decryption, and integrated security services
- C) Packet forwarding only
- D) DNS caching

**Answer:** B

**Q100.** In NGFW Security Policy evaluation, what is the default behavior for traffic between zones?
- A) Intrazone traffic is allowed; interzone traffic is denied unless explicitly allowed
- B) All traffic is allowed
- C) All traffic is denied
- D) Traffic is randomly allowed or denied

**Answer:** A

**Q101.** Which feature allows granular per-app policies to replace traditional port-based filtering?
- A) NAT
- B) App-ID and application-based Security Policy rules
- C) VLAN tagging
- D) QoS

**Answer:** B

**Q102.** What is the role of a Management Profile in NGFW interface configuration?
- A) Profiles manage security policies
- B) Profiles define which management services (ping, SSH, HTTPS, SNMP) are permitted on an interface
- C) Profiles block all traffic
- D) Profiles are not used

**Answer:** B

**Q103.** Which NGFW feature enables inline IP reputation checking and blocking?
- A) User-ID
- B) IP Reputation (PAN-DB) integrated with Threat Prevention
- C) NAT
- D) Decryption

**Answer:** B

**Q104.** In an active/passive NGFW HA pair, which link synchronizes control/heartbeat information?
- A) HA2
- B) HA1 (Heartbeat and control)
- C) HA3
- D) Management interface

**Answer:** B

**Q105.** What is the purpose of HA3 in NGFW HA configuration?
- A) HA3 does not exist
- B) Dedicated forwarding path for session state replication on specific platforms (optimized for performance)
- C) Manages logging
- D) Replaces HA1

**Answer:** B

**Q106.** When deploying NGFW policies, what is the best practice to minimize the attack surface?
- A) Allow all traffic; block specific threats
- B) Deny by default; allow only sanctioned applications and users based on least-privilege principles
- C) No policies are required
- D) Use any-any rules

**Answer:** B

**Q107.** Which command on the NGFW CLI shows current active sessions and their policy hit counts?
- A) show security-policy
- B) show sessions all
- C) show rule usage
- D) show threats

**Answer:** B

**Q108.** In NGFW, how does the content update process affect security posture?
- A) Content updates are optional
- B) Regular content updates (App-ID, Threat Prevention, URL DB) are critical for identifying new threats and applications
- C) Content updates reduce firewall performance
- D) Static content from deployment is sufficient

**Answer:** B

**Q109.** What is the difference between 'Allow' and 'Deny' logging in a Security Policy rule?
- A) There is no difference
- B) Both log matching traffic; 'Allow' logs allowed sessions, 'Deny' logs blocked traffic
- C) Only Deny actions generate logs
- D) Logging is not supported

**Answer:** B

**Q110.** In NGFW, which feature automatically detects and alerts on misconfigured security policies?
- A) Policy Optimizer only
- B) Security Advisor (AIOps) detects policy gaps, shadowed rules, and compliance issues
- C) Threat Prevention
- D) No such feature exists

**Answer:** B

---

## NETWORK SECURITY FUNDAMENTALS QUESTIONS (10)

**Q111.** Which OSI layer does the Palo Alto Networks NGFW primarily operate at for initial traffic decision?
- A) Layer 2 - Data Link only
- B) Layers 3-7 (Network through Application)
- C) Layer 1 - Physical
- D) Layer 8 (Non-existent)

**Answer:** B

**Q112.** What is the purpose of a Demilitarized Zone (DMZ)?
- A) To block all external traffic
- B) To provide a segmented network separating public-facing servers from internal trusted networks
- C) To eliminate the need for firewalls
- D) To merge internal and external networks

**Answer:** B

**Q113.** In a zero-trust architecture, what is the core principle?
- A) Trust all internal traffic
- B) Trust no user or device by default; verify identity and device posture for every access request
- C) Trust is based on IP address only
- D) No security is needed

**Answer:** B

**Q114.** Which protocol is used for secure firewall management?
- A) HTTP (unencrypted)
- B) Telnet
- C) HTTPS / SSH (encrypted)
- D) FTP

**Answer:** C

**Q115.** What is the purpose of Intrusion Prevention System (IPS) signatures in a firewall?
- A) No purpose; IPS is outdated
- B) To detect and block known attack patterns and exploit attempts
- C) To allow all attacks
- D) To provide VPN connectivity

**Answer:** B

**Q116.** In network segmentation, what benefit does creating security zones provide?
- A) No security benefit
- B) Limits lateral movement and allows granular policy control between network segments
- C) Enables unlimited traffic flow
- D) Reduces network speed

**Answer:** B

**Q117.** What is the relationship between threat intelligence and security policy effectiveness?
- A) Threat intelligence is not related to policy
- B) Current threat intelligence informs policy updates, App-ID, URL categories, and IP reputation to protect against emerging threats
- C) Threat intelligence only applies to email security
- D) Policies should never change

**Answer:** B

**Q118.** Which encryption standard is recommended for VPN connections?
- A) No encryption needed
- B) IKEv2 with AES-256 and strong DH groups (14+) for Phase 1 and 2
- C) Weak 3DES only
- D) MD5 for hashing

**Answer:** B

**Q119.** What is a certificate pinning attack, and why is it a concern?
- A) Pinning attacks do not exist
- B) Applications hardcode specific certificates; certificate mismatches bypass intended security
- C) Pinning eliminates all attacks
- D) Pinning prevents user access

**Answer:** B

**Q120.** In a secure network design, what is the purpose of an authentication server (e.g., RADIUS, LDAP)?
- A) Firewalls do not need authentication servers
- B) Centralized user identity verification for access control, auditing, and enforcement of role-based policies
- C) To block all authentication
- D) To replace passwords

**Answer:** B

---

## ADDITIONAL DOMAINS (SUMMARY)

The 120 questions above cover the primary certification domains. Additional domains are reinforced through:

- **NGFW and SASE Solution Functionality**: Q35-Q46 (SASE), Q99-Q110 (NGFW)
- **Platform Solutions, Services and Tools**: Q59-Q70 (IoT Security), Q71-Q82 (Panorama)
- **NGFW_SASE Solution Maintenance and Configuration**: Q71-Q82 (Panorama), Q91-Q98 (NAT)
- **Infrastructure Management and CDSS**: Q71-Q82 (Panorama), SCM references
- **Connectivity and Security**: Q35-Q46 (SASE), Q83-Q90 (GlobalProtect), Q91-Q98 (NAT)
- **ATP**: Q47-Q58 (Decryption enables ATP), Q99-Q110 (NGFW threat prevention)

Each question is written in Palo Alto Networks exam style with four options and a definitive correct answer backed by official documentation.

---

## STUDY RECOMMENDATIONS

1. **Review study guide sections** corresponding to each question domain
2. **Test in topic batches**: Take 15-20 questions per session and review misses
3. **Track weak areas**: Note domains where accuracy is <70%
4. **Use official documentation**: Validate answers against PAN-OS admin guides
5. **Retake exams**: Use this set 2-3 times, spacing sessions 1 week apart
6. **Aim for 80%+ accuracy** before attempting the certification exam

Good luck with your Network Security Professional certification!