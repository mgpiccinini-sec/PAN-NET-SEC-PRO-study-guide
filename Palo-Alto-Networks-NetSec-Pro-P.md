# Palo Alto Networks NetSec-Pro – Practice Exam

---

## Question 61

Which statement best describes the role of zones on a Palo Alto Networks NGFW?  

A. Zones define which physical interfaces can share the same IP subnet.  
B. Zones group interfaces so that security policy can be written between those groups.  
C. Zones are used only for QoS and have no impact on security policy.  
D. Zones dynamically learn membership from routing protocol updates.  

**Correct answer:** B  

**Explanation:** Zones are logical groupings of interfaces that allow Security policy to be written from a source zone to a destination zone, which is the core of how the NGFW decides to permit or deny traffic.  

**Source:** NetSec‑Pro syllabus – Network Security Fundamentals (zone‑based security).  

---

## Question 62

A security engineer wants to ensure that enabling SSL Forward Proxy for internet‑bound traffic does not overload the firewall. Which approach is most appropriate?  

A. Disable App‑ID for decrypted sessions to reduce inspection overhead.  
B. Use decryption policy to target only business‑critical categories and high‑risk applications.  
C. Enable decryption for all traffic and rely only on hardware acceleration.  
D. Configure URL Filtering to block all unknown websites instead of decrypting.  

**Correct answer:** B  

**Explanation:** Decryption policy should focus on traffic that provides the most risk reduction per resource used, such as business‑critical categories and high‑risk applications, instead of decrypting all sessions, to balance security and performance.  

**Source:** NetSec‑Pro syllabus – Explain the use of decryption on Strata and SASE products.  

---

## Question 63

Which use case is the best fit for Prisma SD‑WAN compared to a traditional site‑to‑site IPsec VPN mesh?  

A. Enforcing micro‑segmentation between workloads in a single data center VLAN.  
B. Providing dynamic path selection across multiple WAN links for hundreds of branch offices.  
C. Protecting east‑west traffic inside a Kubernetes cluster.  
D. Encrypting traffic from a single remote user to the data center.  

**Correct answer:** B  

**Explanation:** Prisma SD‑WAN is designed to optimize application experience and provide dynamic path selection across multiple WAN transports for large numbers of branch locations, which static IPsec VPN meshes cannot do efficiently.  

**Source:** NetSec‑Pro syllabus – Explain the function of Prisma SD‑WAN and connectivity across branches and campuses.  

---

## Question 64

A customer wants to secure remote users with Prisma Access while also allowing local breakout for performance‑sensitive SaaS applications. Which design best meets this requirement?  

A. Use GlobalProtect to tunnel all traffic to Prisma Access and disable local breakout on endpoints.  
B. Configure Prisma Access in explicit proxy mode only and route all traffic through the cloud.  
C. Deploy Prisma SD‑WAN for intelligent path selection and integrate Prisma Access as a secure service edge for internet and private app access.  
D. Use only branch firewalls with policy‑based forwarding for SaaS traffic and avoid Prisma Access for remote users.  

**Correct answer:** C  

**Explanation:** Combining Prisma SD‑WAN with Prisma Access allows intelligent path selection and local breakout while still sending traffic to Prisma Access where inspection and policy enforcement are required as part of a SASE architecture.  

**Source:** NetSec‑Pro syllabus – NGFW and SASE solution functionality (Prisma SD‑WAN and Prisma Access).  

---

## Question 65

Which scenario most clearly justifies using Strata Cloud Manager (SCM) instead of only Panorama?  

A. Managing a single standalone PA‑Series firewall in a lab.  
B. Managing only on‑premises PA‑Series firewalls with no cloud‑based services.  
C. Operating a mix of NGFWs, Prisma Access, Prisma SD‑WAN, and Cloud‑Delivered Security Services across multiple regions.  
D. Using only CN‑Series firewalls in a single Kubernetes cluster.  

**Correct answer:** C  

**Explanation:** Strata Cloud Manager is intended for unified, cloud‑based management and visibility across NGFWs, Prisma Access, Prisma SD‑WAN, and CDSS, especially when deployments span multiple regions and environments.  

**Source:** NetSec‑Pro syllabus – Identify options for managing Strata and SASE solutions (Panorama vs SCM).  

---

## Question 66

An organization has enabled Advanced Threat Prevention, Advanced WildFire, Advanced URL Filtering, and Advanced DNS Security on all internet‑facing NGFWs. Which additional step best aligns with Cloud‑Delivered Security Services (CDSS) best practices?  

A. Disable automatic content updates and schedule quarterly manual reviews.  
B. Enable automatic content and signature updates with staged rollout and monitor impact using AIOps or Best Practice Assessment.  
C. Lock the firewall to a known “good” content version and change it only after security incidents.  
D. Apply threat profiles only to internet‑facing Security policy rules and never to east‑west traffic.  

**Correct answer:** B  

**Explanation:** CDSS is most effective when content and signatures are kept current; enabling automatic updates with a staged rollout and monitoring via AIOps or BPA helps maintain strong protection while managing operational risk.  

**Source:** NetSec‑Pro syllabus – Explain the application of Cloud‑Delivered Security Services and align AIOps to them.  

---

## Question 67

Which description best matches the purpose of Enterprise DLP in a Palo Alto Networks environment?  

A. Scans only file uploads to sanctioned SaaS applications for malware.  
B. Identifies and controls sensitive data in motion across NGFW, Prisma Access, and SaaS channels using centrally managed DLP profiles.  
C. Replaces URL Filtering by categorizing websites that contain sensitive content.  
D. Provides endpoint‑only protection for data stored on laptops.  

**Correct answer:** B  

**Explanation:** Enterprise DLP provides centralized, cloud‑delivered data loss prevention that can be applied consistently across NGFW, Prisma Access, and SaaS channels with reusable DLP profiles for sensitive data types.  

**Source:** NetSec‑Pro syllabus – Platform solutions, services, and tools (Enterprise DLP).  

---

## Question 68

A security team wants to reduce time spent manually reviewing firewall configurations and instead receive prioritized recommendations based on best practices. Which capability is designed for this purpose?  

A. URL Filtering profiles.  
B. AIOps and Best Practice Assessment (BPA).  
C. GlobalProtect HIP objects.  
D. Local logging on each firewall.  

**Correct answer:** B  

**Explanation:** AIOps and BPA analyze configuration and operational telemetry against documented best practices and generate prioritized recommendations to improve security posture and reliability, reducing manual review effort.  

**Source:** NetSec‑Pro syllabus – Align AIOps to Cloud‑Delivered Security Services.  

---

## Question 69

Which configuration choice best leverages Dynamic Address Groups (DAGs) on an NGFW?  

A. Grouping IP addresses manually into static address objects for each application.  
B. Automatically populating groups based on tags from logs or external systems so policies follow workloads as they move.  
C. Using dynamic routing protocols to learn address groups.  
D. Configuring zones to automatically create address groups per subnet.  

**Correct answer:** B  

**Explanation:** Dynamic Address Groups are populated using tags from logs, automation, or external systems, allowing policies to automatically follow workloads when their IPs or roles change, without manual rule edits.  

**Source:** NetSec‑Pro syllabus – Infrastructure management and dynamic object usage.  

---

## Question 70

A company wants to minimize administrative effort when onboarding hundreds of new branch locations into Prisma Access for remote networks. Which mechanism best supports this?  

A. Manually creating a new IPsec tunnel object and Security policy per branch.  
B. Using templates in Panorama or SCM and leveraging automation for remote‑network onboarding.  
C. Configuring each branch firewall as a standalone Prisma Access instance.  
D. Creating a separate Prisma Access tenant per branch.  

**Correct answer:** B  

**Explanation:** Using templates and onboarding automation (for example, via Panorama or SCM) allows consistent configuration and reduces repetitive work when bringing many remote networks into Prisma Access.  

**Source:** NetSec‑Pro syllabus – Infrastructure management and connectivity for Prisma Access.  

---

## Question 71

Which situation most clearly requires configuring SSL Inbound Inspection on an NGFW?  

A. Inspecting encrypted traffic from internal users to internet SaaS applications.  
B. Inspecting encrypted traffic from external clients to an internal HTTPS server.  
C. Inspecting SSH management traffic to the firewall itself.  
D. Inspecting GlobalProtect tunnels from remote users.  

**Correct answer:** B  

**Explanation:** SSL Inbound Inspection is used when the firewall can access the private key of an internal server and must decrypt inbound TLS sessions from external clients to inspect them before forwarding to the server.  

**Source:** NetSec‑Pro syllabus – Decryption types (forward proxy vs inbound inspection).  

---

## Question 72

A firewall administrator needs to enforce policy based on user identity in an environment where users frequently move between wired and wireless networks. Which capability is most appropriate?  

A. Application filters.  
B. User‑ID with directory integration and IP‑to‑user mapping.  
C. URL categories.  
D. Static address objects per device.  

**Correct answer:** B  

**Explanation:** User‑ID maps IP addresses to user identities using directory and other sources, allowing Security policy to follow the user regardless of which network they connect from.  

**Source:** NetSec‑Pro syllabus – Network Security Fundamentals (identity‑based access control).  

---

## Question 73

Which GlobalProtect feature enables different access levels based on endpoint posture, such as OS version and security software status?  

A. SSL/TLS service profile.  
B. Host Information Profile (HIP) objects and HIP‑based policy.  
C. Static routes per tunnel.  
D. IPsec crypto profiles.  

**Correct answer:** B  

**Explanation:** HIP objects collect endpoint posture attributes, and HIP‑based policy uses these objects in Security rules to give different access to compliant and non‑compliant endpoints.  

**Source:** NetSec‑Pro syllabus – Connectivity and security for remote access users (GlobalProtect posture).  

---

## Question 74

A data center NGFW pair is deployed in active/passive HA. The business requires minimal interruption during an upgrade from one PAN‑OS feature release to another. Which upgrade method best addresses this requirement?  

A. Power off the passive firewall, upgrade the active firewall, then power on the passive firewall.  
B. Suspend the active firewall, upgrade the passive firewall, fail over, then upgrade the former active firewall.  
C. Upgrade both firewalls simultaneously from Panorama so they reboot at the same time.  
D. Disable HA, upgrade both devices independently, then recreate the HA pair.  

**Correct answer:** B  

**Explanation:** The recommended practice is to upgrade the passive firewall first, trigger failover to make it active, then upgrade the former active device, minimizing disruption for traffic flows.  

**Source:** NetSec‑Pro syllabus – NGFW/SASE maintenance and configuration (HA upgrade procedures).  

---

## Question 75

Which statement best describes how a Security policy rule is evaluated on a Palo Alto Networks NGFW?  

A. Rules are evaluated in random order, but the most specific match is chosen.  
B. Rules are evaluated from the top of the list to the bottom, and the first match is applied.  
C. All rules are evaluated and the last matching rule is applied.  
D. Only rules in the same zone pair as the traffic are ignored permanently.  

**Correct answer:** B  

**Explanation:** Security policy is evaluated from the top of the rulebase downward, and the first rule that matches the traffic is applied, which makes rule ordering and specificity critically important.  

**Source:** NetSec‑Pro syllabus – Network Security Fundamentals (policy evaluation behavior).  

---

## Question 76

Which statement best describes the purpose of App‑ID on a Palo Alto Networks NGFW?  

A. It classifies traffic based only on IP address and port for access control.  
B. It identifies applications based on signatures, heuristics, and characteristics, regardless of port, protocol, or encryption.  
C. It replaces the need for URL Filtering by categorizing websites.  
D. It maps IP addresses to user identities for identity‑based policy.  

**Correct answer:** B  

**Explanation:** App‑ID is the application identification engine that recognizes applications based on their behavior and signatures, even if they use non‑standard ports or encryption, allowing precise application‑based policy.  

**Source:** NetSec‑Pro syllabus – Network Security Fundamentals (Application Layer inspection).  

---

## Question 77

A firewall administrator wants to reduce the risk of lateral movement inside the data center by enforcing Zero Trust principles. Which design choice best supports this goal?  

A. Use a single large Layer 3 zone for all internal servers and apply one Security rule.  
B. Segment servers into multiple zones or sub‑zones by role and enforce policy between them.  
C. Rely only on VLAN separation and avoid using Security policy for east‑west traffic.  
D. Allow all internal traffic and focus only on securing the internet perimeter.  

**Correct answer:** B  

**Explanation:** Zero Trust emphasizes segmentation and least privilege; placing servers into separate zones or sub‑zones by role and enforcing Security policy between them limits lateral movement inside the data center.  

**Source:** NetSec‑Pro syllabus – Network Security Fundamentals (network segmentation and Zero Trust).  

---

## Question 78

Which description most accurately characterizes how Cloud NGFW for hyperscalers (such as AWS) is delivered?  

A. As a VM image that must be manually deployed and managed like an on‑premises firewall.  
B. As a managed firewall‑as‑a‑service offering integrated into the cloud provider, with policy managed through Palo Alto‑provided interfaces.  
C. As a hardware appliance shipped to the cloud provider’s data center.  
D. As a container image that runs only inside Kubernetes clusters.  

**Correct answer:** B  

**Explanation:** Cloud NGFW for public clouds is delivered as a managed firewall‑as‑a‑service integrated with the cloud provider’s infrastructure, while policy is managed through Palo Alto Networks interfaces rather than by directly managing VM instances.  

**Source:** NetSec‑Pro syllabus – NGFW and SASE Solution Functionality (Cloud NGFWs).  

---

## Question 79

Which Prisma Access service type is primarily responsible for securing traffic from branch sites and small offices into the corporate environment?  

A. Mobile User Gateway.  
B. Service Connection.  
C. Remote Network.  
D. GlobalProtect Portal.  

**Correct answer:** C  

**Explanation:** Remote Network connections in Prisma Access are used to onboard and secure branch and small office sites by building IPsec tunnels from those sites into the Prisma Access fabric.  

**Source:** NetSec‑Pro syllabus – NGFW and SASE Solution Functionality (Prisma Access).  

---

## Question 80

Which statement best describes the role of Panorama in a large NGFW deployment?  

A. It is required for all firewall deployments and is the only way to configure an NGFW.  
B. It provides centralized management, policy creation, and reporting for multiple NGFWs.  
C. It functions only as a log collector and cannot push configuration.  
D. It is used only for managing Cloud NGFWs and not PA‑Series firewalls.  

**Correct answer:** B  

**Explanation:** Panorama is the on‑premises centralized management platform that enables administrators to create and push policies and objects to many NGFWs, as well as aggregate logs and reports across the deployment.  

**Source:** NetSec‑Pro syllabus – Platform Solutions, Services, and Tools (Panorama and centralized management).  

---

## Question 81

Which benefit is most directly provided by Cloud‑Delivered Security Services (CDSS) such as Advanced Threat Prevention and Advanced DNS Security?  

A. They eliminate the need for decryption by inspecting only packet headers.  
B. They provide continuously updated cloud intelligence and advanced detection engines without requiring frequent manual signature tuning.  
C. They replace the need for URL Filtering and WildFire subscriptions.  
D. They are used only for on‑premises PA‑Series firewalls, not for Prisma Access.  

**Correct answer:** B  

**Explanation:** CDSS brings advanced, cloud‑driven detection engines and continuously updated threat intelligence, reducing the need for administrators to manually tune signatures while improving protection against emerging threats.  

**Source:** NetSec‑Pro syllabus – Platform Solutions, Services, and Tools (application of CDSS).  

---

## Question 82

An engineer wants to ensure that configuration changes made to a firewall can be easily audited and rolled back if necessary. Which feature is most appropriate to use?  

A. Custom URL categories.  
B. Configuration snapshots and Named Configurations.  
C. Packet capture (pcap) filters.  
D. Zone Protection Profiles.  

**Correct answer:** B  

**Explanation:** Configuration snapshots and Named Configurations allow administrators to save, compare, and restore configuration states, which is critical for auditing changes and rolling back to a known‑good configuration when needed.  

**Source:** NetSec‑Pro syllabus – NGFW and SASE Solution Maintenance and Configuration.  

---

## Question 83

A pair of PA‑Series firewalls is configured in active/passive HA. Which condition will typically trigger a failover from the active to the passive device?  

A. A single content update fails to download.  
B. A monitored interface goes down and link/path monitoring is configured to fail over on that event.  
C. A user logs out of the web UI on the active device.  
D. A log forwarding profile is removed from a Security rule.  

**Correct answer:** B  

**Explanation:** When link and path monitoring are configured, the failure of monitored interfaces or paths can trigger a failover to the passive firewall to maintain availability for traffic flows.  

**Source:** NetSec‑Pro syllabus – Maintenance and configuration (HA and failover triggers).  

---

## Question 84

Which practice is recommended before performing a PAN‑OS upgrade on a production NGFW?  

A. Disable all logging to prevent performance impact during the upgrade.  
B. Back up the running configuration and verify the target PAN‑OS version is supported for the platform and Panorama (if used).  
C. Remove all security profiles to avoid signature conflicts.  
D. Clear all session tables to speed up reboot times.  

**Correct answer:** B  

**Explanation:** Best practice is to back up the configuration and confirm that the target PAN‑OS release is supported for the hardware and matches or is compatible with the Panorama version used for management, minimizing upgrade risk.  

**Source:** NetSec‑Pro syllabus – NGFW and SASE Solution Maintenance and Configuration (upgrade preparation).  

---

## Question 85

An organization uses IoT Security with NGFWs to profile devices on the network. What is the primary benefit of this integration?  

A. It automatically replaces all IoT device firmware with secure versions.  
B. It uses device profiles and risk scores to drive Security policy recommendations for unmanaged and IoT devices.  
C. It performs full malware scanning on all IoT firmware images in the cloud.  
D. It replaces the need for any VLAN segmentation.  

**Correct answer:** B  

**Explanation:** IoT Security integrates with NGFWs to profile devices and assign risk scores, which can then be used to recommend or enforce Security policies tailored to the behavior and risk level of unmanaged and IoT devices.  

**Source:** NetSec‑Pro syllabus – Infrastructure Management and CDSS (maintain and configure IoT Security).  

---

## Question 86

Which deployment choice best reduces management overhead for a global organization running dozens of firewalls, Prisma Access, and Prisma SD‑WAN sites?  

A. Managing each firewall and service independently via its local web interface.  
B. Centralizing management in Strata Cloud Manager with device groups, templates, and role‑based access control.  
C. Using only CLI scripts on each device, stored in local text files.  
D. Delegating management to each country with no central oversight.  

**Correct answer:** B  

**Explanation:** Strata Cloud Manager provides centralized, cloud‑hosted management with device groups, templates, and RBAC, which reduces overhead and improves consistency across large, distributed deployments that include NGFWs and SASE components.  

**Source:** NetSec‑Pro syllabus – Infrastructure Management and CDSS (SCM).  

---

## Question 87

A security engineer needs to ensure that DNS queries to known malicious domains are blocked and that infected endpoints are identified. Which combination of features should be configured?  

A. URL Filtering profile with malware category set to alert only.  
B. DNS Security integrated into an Anti‑Spyware profile with sinkhole action enabled.  
C. Antivirus profile set to reset‑client on all signatures.  
D. File‑Blocking profile configured for executable downloads only.  

**Correct answer:** B  

**Explanation:** DNS Security integrates with the Anti‑Spyware profile to detect malicious domains and can sinkhole DNS queries, both blocking resolution and helping identify infected hosts that try to reach those domains.  

**Source:** NetSec‑Pro syllabus – Infrastructure Management and CDSS (DNS Security).  

---

## Question 88

A GlobalProtect deployment uses Always‑On VPN mode. What is a key security advantage of this configuration?  

A. Users can choose whether to connect the VPN when needed.  
B. All endpoint traffic is guaranteed to use a local internet breakout.  
C. The endpoint automatically establishes and maintains a secure tunnel, reducing the chance that users bypass security controls.  
D. It disables HIP checks to reduce latency.  

**Correct answer:** C  

**Explanation:** Always‑On VPN mode ensures that endpoints automatically establish and maintain tunnels, preventing users from inadvertently or deliberately sending traffic outside the secure path where corporate Security policies are enforced.  

**Source:** NetSec‑Pro syllabus – Connectivity and Security (remote users and GlobalProtect).  

---

## Question 89

Which NAT configuration is appropriate when an internal server must be accessible from the internet using a single public IP address on the firewall?  

A. Dynamic IP and Port (DIPP) source NAT translating many internal servers to one public IP.  
B. Static NAT mapping a specific internal server IP to a specific public IP on the firewall.  
C. Policy‑based NAT that randomizes source ports for all outbound sessions.  
D. Dynamic IP source NAT translating per‑user public addresses.  

**Correct answer:** B  

**Explanation:** Static NAT maps a specific internal IP to a specific public IP, which is the typical configuration when exposing a server to the internet via a single external address on the firewall.  

**Source:** NetSec‑Pro syllabus – Connectivity and Security (network security of on‑premises and hybrid networks, NAT).  

---

## Question 90

A remote worker reports that GlobalProtect connects successfully, but they cannot reach internal applications. Which is the most appropriate initial troubleshooting step?  

A. Delete and recreate all Security policies on the data center firewall.  
B. Verify that the GlobalProtect gateway tunnel is associated with the correct internal routing and Security policies.  
C. Disable HIP checks to see if they interfere with access.  
D. Instruct the user to reboot repeatedly until it works.  

**Correct answer:** B  

**Explanation:** When GlobalProtect connects but access fails, the first step is to confirm that the gateway’s tunnel interface is included in the correct virtual router and Security policies so that traffic from the tunnel can be routed to and allowed to internal resources.  

**Source:** NetSec‑Pro syllabus – Connectivity and Security (maintain connectivity and security of remote users).  

---

## Question 91

Which statement best describes the purpose of Security Profiles on a Palo Alto Networks NGFW?  

A. They define which users are allowed to log into the firewall.  
B. They provide additional inspection and enforcement (such as Antivirus, Vulnerability, URL Filtering) on traffic already allowed by Security policy rules.  
C. They determine which interfaces belong to which zones.  
D. They are used only to apply QoS settings.  

**Correct answer:** B  

**Explanation:** Security Profiles (Antivirus, Vulnerability Protection, URL Filtering, DNS Security, WildFire, etc.) apply advanced inspection and enforcement to traffic that has already been permitted by a Security policy rule, enabling content‑level protection.  

**Source:** NetSec‑Pro syllabus – Network Security Fundamentals (Content‑ID and hardening methods).  

---

## Question 92

A firewall administrator wants to detect and block command‑and‑control (C2) traffic that uses DNS tunneling techniques. Which configuration is most appropriate?  

A. Configure a Vulnerability Protection profile with only critical severities set to block.  
B. Enable DNS Security within an Anti‑Spyware profile and attach it to relevant Security rules.  
C. Create a File‑Blocking profile for portable executable (PE) files only.  
D. Rely solely on URL Filtering with the malware category set to block.  

**Correct answer:** B  

**Explanation:** DNS Security integrates with Anti‑Spyware profiles to detect malicious domains, including those used for DNS tunneling and C2, and can take actions such as sinkhole or block on suspicious DNS queries.  

**Source:** NetSec‑Pro syllabus – Infrastructure Management and CDSS (maintain and configure DNS Security).  

---

## Question 93

Which approach best aligns with Zero Trust principles when designing Security policy for internal applications?  

A. Allow any internal traffic between trusted subnets and inspect only internet traffic.  
B. Allow traffic by default and only block known malicious IP addresses.  
C. Start from a deny‑all stance and explicitly allow only required application flows between specific users, devices, and applications.  
D. Use only network‑based ACLs without application or user awareness.  

**Correct answer:** C  

**Explanation:** Zero Trust is based on least privilege and assumes no implicit trust; policies should start from deny‑all and then explicitly permit only the necessary application flows for specific users, devices, and workloads.  

**Source:** NetSec‑Pro syllabus – Network Security Fundamentals (Zero Trust and hardening).  

---

## Question 94

Which deployment scenario is the best fit for CN‑Series firewalls?  

A. Protecting workloads in a Kubernetes or containerized environment where firewalls run as containerized network functions.  
B. Providing perimeter security at an on‑premises data center using hardware appliances.  
C. Acting as a managed service inside a hyperscaler environment only.  
D. Serving as a GlobalProtect portal for remote users.  

**Correct answer:** A  

**Explanation:** CN‑Series firewalls are containerized firewalls designed for Kubernetes and other container platforms, providing security close to containerized workloads.  

**Source:** NetSec‑Pro syllabus – NGFW and SASE Solution Functionality (CN‑Series firewalls).  

---

## Question 95

A customer wants to protect applications running in AWS using Cloud NGFW. What is one key advantage of Cloud NGFW compared to manually deploying VM‑Series instances?  

A. Cloud NGFW requires no configuration of Security policies.  
B. Cloud NGFW is delivered as a managed firewall‑as‑a‑service, simplifying lifecycle operations and scaling.  
C. Cloud NGFW does not support integration with AWS constructs.  
D. Cloud NGFW can only be used for outbound internet traffic, not VPC‑to‑VPC traffic.  

**Correct answer:** B  

**Explanation:** Cloud NGFW is a managed firewall‑as‑a‑service integrated with the cloud provider, offloading lifecycle management and scaling tasks from the customer while still allowing policy control through Palo Alto tools.  

**Source:** NetSec‑Pro syllabus – NGFW and SASE Solution Functionality (Cloud NGFWs).  

---

## Question 96

Which action should an administrator take to ensure that a PAN‑OS upgrade on firewalls managed by Panorama remains supported?  

A. Upgrade the firewalls first, then upgrade Panorama when convenient.  
B. Ensure Panorama is running the same or a newer PAN‑OS release than the target firewall PAN‑OS version before upgrading the firewalls.  
C. Always run Panorama on an older PAN‑OS version than managed firewalls for stability.  
D. Disable Panorama management before upgrading any device.  

**Correct answer:** B  

**Explanation:** Panorama must run the same or a later PAN‑OS release than the devices it manages to ensure compatibility and support, so its upgrade must precede or match firewall upgrade versions.  

**Source:** NetSec‑Pro syllabus – Maintenance and Configuration (Panorama and firewall version compatibility).  

---

## Question 97

Which statement accurately describes how log forwarding to Strata Logging Service (SLS) benefits an organization using Prisma Access and NGFWs?  

A. It removes the need to store any logs locally on devices.  
B. It centralizes logs in a scalable cloud service, enabling long‑term retention, correlation, and advanced analytics across Prisma Access and NGFW deployments.  
C. It only stores logs for a fixed 7‑day period.  
D. It is used only for compliance reporting and not for security investigations.  

**Correct answer:** B  

**Explanation:** Strata Logging Service provides centralized, scalable cloud log storage for Prisma Access and NGFW logs, which supports extended retention, correlation, and security investigations beyond what individual devices can store.  

**Source:** NetSec‑Pro syllabus – Infrastructure Management and CDSS (maintain and configure CDSS logging).  

---

## Question 98

Which scenario best illustrates when to use SaaS Security Inline?  

A. Protecting internal database servers against SQL injection.  
B. Monitoring and controlling access to sanctioned SaaS applications by inspecting inline traffic from users to those SaaS services.  
C. Providing offline scanning of backup data.  
D. Managing SaaS user accounts and licensing only.  

**Correct answer:** B  

**Explanation:** SaaS Security Inline is designed to inspect and control inline traffic to sanctioned SaaS applications, enforcing data and access policies for cloud applications used by users.  

**Source:** NetSec‑Pro syllabus – Infrastructure Management and CDSS (maintain and configure Enterprise SaaS Security).  

---

## Question 99

Which is a primary purpose of Strata Cloud Manager (SCM) in a modern network security deployment?  

A. It replaces all need for Panorama and on‑device configuration backups.  
B. It provides a cloud‑hosted management and visibility plane for NGFWs, Prisma Access, Prisma SD‑WAN, and CDSS across distributed environments.  
C. It is used only for license activation.  
D. It can manage only Prisma Access and not NGFWs.  

**Correct answer:** B  

**Explanation:** SCM is a cloud‑hosted management platform meant to unify configuration, visibility, and operations across NGFWs, Prisma Access, Prisma SD‑WAN, and Cloud‑Delivered Security Services, especially at scale.  

**Source:** NetSec‑Pro syllabus – Infrastructure Management and CDSS (maintain and configure SCM).  

---

## Question 100

A security engineer wants to minimize the risk of misconfigurations when onboarding new NGFWs and ensuring they follow company standards. Which approach is most appropriate?  

A. Configure each firewall manually using the CLI only.  
B. Use templates and device groups in Panorama or SCM, combined with Best Practice Assessment (BPA) reports.  
C. Disable all default Security profiles before deployment.  
D. Avoid using central management platforms to prevent complexity.  

**Correct answer:** B  

**Explanation:** Templates and device groups allow standardized configuration across devices, while BPA reports highlight deviations from best practices, reducing the chance of misconfiguration as new devices are onboarded.  

**Source:** NetSec‑Pro syllabus – Infrastructure Management and CDSS (SCM/Panorama and best practices).  

---

## Question 101

Which configuration most effectively enforces consistent Secure Web Gateway‑style controls for remote users connecting from unmanaged networks?  

A. Rely only on local endpoint antivirus software.  
B. Use Prisma Access with GlobalProtect or explicit proxy mode to steer remote user traffic through cloud‑delivered inspection and policy.  
C. Permit split tunneling for all traffic to reduce latency.  
D. Deploy only on‑premises NGFWs at headquarters.  

**Correct answer:** B  

**Explanation:** Prisma Access, using GlobalProtect or explicit proxy, can enforce Secure Web Gateway‑like controls by steering remote user traffic through cloud‑delivered inspection and policy regardless of the user’s location.  

**Source:** NetSec‑Pro syllabus – Connectivity and Security (maintain connectivity and security of remote users).  

---

## Question 102

A company notices frequent false positives on low‑risk vulnerability signatures that are set to “reset‑both.” What is the best practice adjustment?  

A. Disable the Vulnerability Protection profile entirely.  
B. Change all signatures to “alert” only.  
C. Tune actions per signature severity and confidence, using “alert” for low‑risk/low‑confidence events while keeping stronger actions for critical threats.  
D. Turn off logging for all low‑risk vulnerabilities.  

**Correct answer:** C  

**Explanation:** Best practice is to tune actions based on severity and confidence, applying more conservative actions (like alert) for low‑risk or low‑confidence signatures and stronger actions (drop/reset) for higher‑risk ones, balancing security and noise.  

**Source:** NetSec‑Pro syllabus – Platform Solutions, Services, and Tools (applying CDSS and profiles).  

---

## Question 103

Which method can help ensure that Security policy remains effective as new applications and threats emerge without constant manual rule creation?  

A. Rely only on IP and port‑based rules.  
B. Use application filters and application groups with regularly updated App‑ID content.  
C. Disable App‑ID updates to keep application behavior stable.  
D. Use a single any‑any allow rule and rely on logging.  

**Correct answer:** B  

**Explanation:** Application filters and groups that leverage updated App‑ID content allow policies to automatically include newly identified applications matching specific characteristics (for example, video‑streaming or file‑sharing categories) without constant manual rule edits.  

**Source:** NetSec‑Pro syllabus – Network Security Fundamentals (Application Layer inspection and App‑ID).  

---

## Question 104

Which configuration best supports high availability for Prisma SD‑WAN ION devices at a branch location?  

A. Deploy a single ION device with no redundancy and rely on cloud failover.  
B. Deploy redundant ION devices in HA at the branch, with appropriate link and path monitoring.  
C. Use only redundant routers and no Prisma SD‑WAN devices.  
D. Configure a single ION with multiple power supplies and consider it sufficient.  

**Correct answer:** B  

**Explanation:** Using redundant ION devices with HA at the branch and proper health monitoring ensures SD‑WAN connectivity remains available if one device fails, aligning with HA design principles.  

**Source:** NetSec‑Pro syllabus – NGFW and SASE Solution Maintenance and Configuration (Prisma SD‑WAN).  

---

## Question 105

A network security engineer wants a simple way to see which Security policies are actually matching traffic and which are unused. Which feature should be used?  

A. Session Browser only.  
B. Policy Hit Count and rule usage information in the Security policy view.  
C. Only the ACC (Application Command Center) widget.  
D. Only URL Filtering logs.  

**Correct answer:** B  

**Explanation:** Policy Hit Count and rule usage data in the Security policy view show how often each rule is matched, helping identify unused or redundant policies that can be optimized or removed.  

**Source:** NetSec‑Pro syllabus – Maintenance and Configuration (monitoring and troubleshooting).  

---

## Question 106

Which feature allows a Palo Alto Networks NGFW to apply different Security Profiles based on the type of content being transferred (for example, file type)?  

A. Application filters.  
B. File‑Blocking profiles.  
C. Decryption profiles.  
D. Service routes.  

**Correct answer:** B  

**Explanation:** File‑Blocking profiles let you control file transfers based on file type and direction, and can be combined with other Security Profiles to tailor protection for specific content types.  

**Source:** NetSec‑Pro syllabus – Network Security Fundamentals (Content‑ID and hardening methods).  

---

## Question 107

Which is the best description of how WildFire enhances malware detection beyond traditional Antivirus?  

A. It only updates signatures once per year.  
B. It performs cloud‑based dynamic analysis of unknown files and generates new signatures for discovered malware.  
C. It works only for HTTP file downloads.  
D. It replaces the need for any Antivirus profile.  

**Correct answer:** B  

**Explanation:** WildFire detonates unknown samples in cloud‑based analysis environments and generates new signatures for discovered malware, extending protection beyond static, known‑signature Antivirus detection.  

**Source:** NetSec‑Pro syllabus – Platform Solutions, Services, and Tools (WildFire and Advanced Threat Prevention).  

---

## Question 108

A firewall administrator wants to prevent users from uploading sensitive documents to unsanctioned file‑sharing sites. Which combination of features provides the strongest control?  

A. URL Filtering categories only.  
B. Enterprise DLP with SaaS Security Inline and URL Filtering.  
C. Antivirus profiles only.  
D. DNS Security only.  

**Correct answer:** B  

**Explanation:** Enterprise DLP can detect sensitive content, SaaS Security Inline can enforce controls on SaaS/file‑sharing traffic, and URL Filtering can restrict access to unsanctioned sites, together providing strong control over data exfiltration.  

**Source:** NetSec‑Pro syllabus – Platform Solutions, Services, and Tools (Enterprise DLP and SaaS Security).  

---

## Question 109

Which statement best describes the function of a Decryption Profile?  

A. It determines which traffic will be decrypted based on source and destination.  
B. It defines SSL/TLS protocol settings and security checks applied to traffic that has already been selected for decryption.  
C. It replaces the need for any Decryption policy.  
D. It configures IPsec tunnels for GlobalProtect.  

**Correct answer:** B  

**Explanation:** Decryption Profiles specify protocol versions, certificate checks, and other SSL/TLS security parameters that are enforced on traffic selected for decryption by Decryption policy rules.  

**Source:** NetSec‑Pro syllabus – Network Security Fundamentals (use of decryption and profiles).  

---

## Question 110

In a Prisma Access deployment, which type of connection is primarily used to provide secure connectivity from the customer data center to Prisma Access so internal applications can be accessed?  

A. Mobile user gateway.  
B. Service Connection.  
C. Remote Network.  
D. Explicit proxy.  

**Correct answer:** B  

**Explanation:** Service Connections establish secure connectivity between Prisma Access and customer data centers, enabling access to internal applications for users and branches connected to Prisma Access.  

**Source:** NetSec‑Pro syllabus – NGFW and SASE Solution Functionality (Prisma Access components).  

---

## Question 111

Which of the following is a key benefit of using templates in Panorama?  

A. They automatically generate Security policies based on logs.  
B. They allow centralized management of shared device‑level settings (interfaces, NTP, DNS, etc.) across multiple firewalls.  
C. They are used only for log forwarding configurations.  
D. They can be applied only to a single firewall at a time.  

**Correct answer:** B  

**Explanation:** Templates in Panorama are used to manage shared device‑level settings such as interfaces, routing, NTP, DNS, and other configuration elements across multiple firewalls, ensuring consistency.  

**Source:** NetSec‑Pro syllabus – Platform Solutions, Services, and Tools (Panorama templates and device groups).  

---

## Question 112

Which is a recommended best practice when creating Security policy rules for application control?  

A. Use “any” application in all rules and rely only on Security Profiles.  
B. Use App‑ID to specify required applications and limit services to “application‑default” where possible.  
C. Always allow “unknown‑tcp” and “unknown‑udp” to avoid breaking new apps.  
D. Create duplicate rules per IP range instead of using App‑ID.  

**Correct answer:** B  

**Explanation:** Best practice is to create application‑aware rules using App‑ID and limit services to “application‑default,” which allows applications only on their expected ports and improves security.  

**Source:** NetSec‑Pro syllabus – Network Security Fundamentals (Application Layer inspection and best practices).  

---

## Question 113

An administrator notices that a Security rule intended for a specific user group is not matching traffic. User‑ID appears to be configured. What is an appropriate initial troubleshooting step?  

A. Disable User‑ID and revert to IP‑based policy.  
B. Verify that the user’s group membership is correctly learned from the directory and mapped to the IP in the User‑ID mappings.  
C. Increase the logging level to debug for all daemons.  
D. Delete and recreate all Security rules.  

**Correct answer:** B  

**Explanation:** When user‑based policies fail to match, confirming that User‑ID has the correct IP‑to‑user mapping and that the user’s group membership is correctly learned from the directory is a key first troubleshooting step.  

**Source:** NetSec‑Pro syllabus – Network Security Fundamentals (identity‑based access and troubleshooting).  

---

## Question 114

A company wants to ensure that only managed corporate devices can establish GlobalProtect VPN connections. Which feature is best suited for this requirement?  

A. SSL/TLS service profiles.  
B. HIP checks with device‑based criteria and corresponding Security policy.  
C. Local user database authentication.  
D. DNS Security profiles.  

**Correct answer:** B  

**Explanation:** HIP checks can evaluate host posture, including device certificates, OS attributes, and security software, and can be used with Security policy to allow only compliant, managed devices to access internal resources.  

**Source:** NetSec‑Pro syllabus – Connectivity and Security (remote users and GlobalProtect posture).  

---

## Question 115

Which configuration example demonstrates proper use of “application‑default” in a Security policy?  

A. Allowing “web‑browsing” with service set to “any.”  
B. Allowing “ssh” with service set to “application‑default.”  
C. Allowing “any” application with service set to “application‑default.”  
D. Blocking “ms‑rpc” with service set to “any.”  

**Correct answer:** B  

**Explanation:** Using “application‑default” with a specific application like SSH restricts traffic to the ports that SSH normally uses, improving security compared to allowing that application on any port.  

**Source:** NetSec‑Pro syllabus – Network Security Fundamentals (policy and application‑default usage).  

---

## Question 116

Which design choice most improves resilience for log collection in a large deployment using Panorama and Strata Logging Service?  

A. Configure only local logging on each firewall.  
B. Use multiple log collectors or logging service regions and configure redundancy in Panorama log collector groups.  
C. Disable log redundancy to save bandwidth.  
D. Forward only threat logs and discard traffic logs.  

**Correct answer:** B  

**Explanation:** Using multiple log collectors or logging service regions and configuring them in redundant log collector groups ensures that logging continues even if one collector or region becomes unavailable.  

**Source:** NetSec‑Pro syllabus – Infrastructure Management and CDSS (maintain and configure CDSS logging).  

---

## Question 117

Which statement describes a key difference between Security policy rules and Decryption policy rules?  

A. Security policy rules are evaluated top‑down, whereas Decryption policy rules are evaluated bottom‑up.  
B. Decryption policy rules decide whether to decrypt traffic; Security policy rules decide whether to allow or deny traffic and which Security Profiles to apply.  
C. Security policy applies only to decrypted traffic; Decryption policy applies only to cleartext traffic.  
D. Decryption policy rules replace the need for any Security policy.  

**Correct answer:** B  

**Explanation:** Decryption policy determines whether traffic should be decrypted (and how), while Security policy controls whether that traffic is allowed or blocked and which Security Profiles are applied, after or regardless of decryption decisions.  

**Source:** NetSec‑Pro syllabus – Network Security Fundamentals (use of decryption and policy evaluation).  

---

## Question 118

Which configuration is recommended to ensure that Prisma Access can properly identify users for policy enforcement when integrated with on‑premises identity services?  

A. Use only local user accounts defined in Prisma Access.  
B. Integrate with Cloud Identity Engine or on‑premises directory services to provide User‑ID information.  
C. Disable user‑based policy and rely only on IP‑based rules.  
D. Forward only URL logs from NGFWs to Prisma Access.  

**Correct answer:** B  

**Explanation:** Integrating Prisma Access with Cloud Identity Engine or on‑premises directories allows User‑ID information to be used in policy, enabling identity‑based access similar to on‑premises NGFW deployments.  

**Source:** NetSec‑Pro syllabus – Connectivity and Security (method to maintain connectivity and security of remote users).  

---

## Question 119

A branch firewall uses SD‑WAN to connect over two ISP links. The administrator wants to prioritize VoIP traffic over the better‑performing link. Which configuration element is most important?  

A. Zone Protection profiles on the WAN interfaces.  
B. Path quality measurement and application‑aware traffic steering policies.  
C. Static routes with equal cost multipath (ECMP).  
D. DNS sinkhole configuration.  

**Correct answer:** B  

**Explanation:** SD‑WAN uses path quality metrics (latency, jitter, loss) and application‑aware steering policies to dynamically send VoIP traffic over the better‑performing link, optimizing user experience.  

**Source:** NetSec‑Pro syllabus – NGFW and SASE Solution Functionality (Prisma SD‑WAN and application experience).  

---

## Question 120

Which method helps ensure that Security policies remain aligned with best practices as an environment evolves over time?  

A. Avoid changing Security policies once they are in production.  
B. Periodically run Best Practice Assessments (BPA) or similar tools and adjust policies, Security Profiles, and decryption settings based on findings.  
C. Disable logging for low‑risk rules.  
D. Allow any‑any rules temporarily and leave them in place if no incidents occur.  

**Correct answer:** B  

**Explanation:** Regularly running BPA or equivalent best‑practice tooling and adjusting configuration accordingly ensures that Security policies and profiles evolve with changes in the environment and threat landscape.  

**Source:** NetSec‑Pro syllabus – Platform Solutions, Services, and Tools (applying best practices and AIOps).  

---

## Question 121

Which configuration best helps prevent resource exhaustion from SYN flood attacks on an NGFW?  

A. Enabling only URL Filtering on all internet‑facing rules.  
B. Configuring Zone Protection profiles with SYN flood protection and SYN cookies on untrusted zones.  
C. Disabling logging on all Security rules.  
D. Configuring Decryption policy for all outbound traffic.  

**Correct answer:** B  

**Explanation:** SYN flood protection with SYN cookies in a Zone Protection profile prevents resource exhaustion by validating session establishment before allocating full connection resources.  

**Source:** NetSec‑Pro syllabus – Network Security Fundamentals (network protections and hardening).  

---

## Question 122

Which option describes a key benefit of using **virtual wire (vwire)** deployment for an NGFW?  

A. It provides full routing capabilities between networks.  
B. It allows transparent insertion of the firewall into existing Layer 1/Layer 2 topologies without changing IP addressing.  
C. It is required for all GlobalProtect deployments.  
D. It supports only IPv6 traffic.  

**Correct answer:** B  

**Explanation:** Virtual wire mode lets the NGFW be placed transparently between two Layer 2 segments with no IP addressing changes, making it ideal for inline security insertion without redesigning the network.  

**Source:** NetSec‑Pro syllabus – Network Security Fundamentals (network architecture & firewall modes).  

---

## Question 123

A firewall administrator configures a Security rule allowing “web‑browsing” with service “any.” What is a security concern with this configuration?  

A. The firewall will block all HTTPS traffic by default.  
B. The application can run on non‑standard ports, which might be used for evasion.  
C. App‑ID will be disabled for this traffic.  
D. This configuration breaks URL Filtering.  

**Correct answer:** B  

**Explanation:** Allowing “web‑browsing” with service “any” permits the application on any port, potentially enabling port‑evasion techniques; using “application‑default” better restricts traffic to expected ports.  

**Source:** NetSec‑Pro syllabus – Network Security Fundamentals (App‑ID and application‑default).  

---

## Question 124

Which combination of features is most appropriate to limit brute‑force login attempts against externally published administrative portals?  

A. SSL Decryption and URL Filtering only.  
B. Vulnerability Protection with brute‑force signatures and Security policy limiting source countries.  
C. Decryption policy only.  
D. Antivirus and File‑Blocking profiles only.  

**Correct answer:** B  

**Explanation:** Vulnerability Protection profiles can detect brute‑force patterns, and Security policy that restricts administrative access (for example, by IP, region, or VPN) further reduces exposure to brute‑force attacks.  

**Source:** NetSec‑Pro syllabus – Network Security Fundamentals (hardening methods and threat prevention).  

---

## Question 125

An NGFW is deployed between the campus core and data center. The security team wants to prevent scanning and spoofing attempts coming from user VLANs. Which configuration best addresses this?  

A. Only enable logging on all rules.  
B. Apply Zone Protection profiles with reconnaissance protection (port scan, host sweep) and IP spoofing protection on user zones.  
C. Force all users through GlobalProtect.  
D. Disable ARP on user interfaces.  

**Correct answer:** B  

**Explanation:** Zone Protection profiles with reconnaissance and IP spoofing protections applied to user zones help block scanning and spoofed traffic before it reaches sensitive data center networks.  

**Source:** NetSec‑Pro syllabus – Network Security Fundamentals (Zone Protection and DoS protections).  

---

## Question 126

Which statement accurately describes how **Service routes** are used on a Palo Alto Networks firewall?  

A. They define the path for user traffic through the firewall.  
B. They specify which source interface and IP the firewall itself uses for management and service traffic (for example, DNS, updates, logging).  
C. They are used only for GlobalProtect tunnels.  
D. They replace the need for default routes.  

**Correct answer:** B  

**Explanation:** Service routes control which interface and IP address the firewall uses for its own management and service communications (such as DNS, NTP, updates, logging), independent of user data flows.  

**Source:** NetSec‑Pro syllabus – Maintenance and Configuration (infrastructure and connectivity).  

---

## Question 127

Which use case is best addressed by configuring a **DoS Protection policy** (DoS rules) instead of relying only on Zone Protection?  

A. Protecting an entire zone from reconnaissance scans.  
B. Protecting specific critical servers or subnets from resource‑exhaustion attacks, with per‑destination or per‑IP thresholds.  
C. Protecting the firewall’s management IP from brute‑force SSH attempts.  
D. Blocking all outbound traffic from a guest zone.  

**Correct answer:** B  

**Explanation:** DoS Protection policies provide granular control to protect specific hosts or subnets with defined thresholds and actions, complementing broader Zone Protection that applies at the zone level.  

**Source:** NetSec‑Pro syllabus – Network Security Fundamentals (DoS protections and hardening).  

---

## Question 128

Which statement best describes the function of **Content‑ID** on the NGFW?  

A. It only controls which URLs users can visit.  
B. It provides single‑pass inspection that combines application, user, and content inspection to enforce threat prevention, file, and URL policies.  
C. It is only used for SSL decryption.  
D. It replaces the need for App‑ID and User‑ID.  

**Correct answer:** B  

**Explanation:** Content‑ID is the unified inspection engine that, in a single pass, applies application awareness, user context, and multiple content controls (threat prevention, URL, file control), enabling efficient and effective security enforcement.  

**Source:** NetSec‑Pro syllabus – Network Security Fundamentals (Content‑ID).  

---

## Question 129

A security engineer wants to ensure that only specific SaaS applications can be used for file sharing, and unsanctioned file‑sharing apps must be blocked. Which configuration is most appropriate?  

A. Enable SSL decryption and log all traffic.  
B. Use App‑ID to allow only sanctioned SaaS apps, create an application filter for file‑sharing category, and block it except for the allowed apps; optionally use SaaS Security.  
C. Allow all applications but rely on Antivirus.  
D. Use only URL categories for “online‑storage‑and‑backup.”  

**Correct answer:** B  

**Explanation:** Application‑aware policies that explicitly allow sanctioned SaaS apps and block other file‑sharing category apps, combined with SaaS Security for deeper control, provide precise control over SaaS file‑sharing usage.  

**Source:** NetSec‑Pro syllabus – Platform Solutions, Services, and Tools (SaaS Security and App‑ID).  

---

## Question 130

Which scenario requires the use of a **Decryption exclusion**?  

A. An internal web application that uses cleartext HTTP.  
B. A banking or healthcare application that breaks when traffic is intercepted due to certificate pinning.  
C. A public website that uses standard certificates and works with decryption.  
D. A site that uses only TLS 1.3.  

**Correct answer:** B  

**Explanation:** Some applications (especially financial or healthcare apps) use certificate pinning and will fail if intercepted; these should be selectively excluded from decryption using Decryption exclusions while still inspecting other traffic.  

**Source:** NetSec‑Pro syllabus – Network Security Fundamentals (decryption caveats and best practices).  

---

## Question 131

Which GlobalProtect configuration most improves user experience while still enforcing corporate policy for internet traffic?  

A. Always‑On VPN with full tunnel and no split tunneling, regardless of application type.  
B. Split tunneling that sends corporate and high‑risk traffic through the tunnel while allowing low‑risk public destinations direct access, combined with Security Profiles on tunneled traffic.  
C. Allow users to manually decide whether to connect the VPN.  
D. Only use clientless VPN for all scenarios.  

**Correct answer:** B  

**Explanation:** Carefully configured split tunneling can reduce latency and bandwidth usage by sending selected traffic directly while still enforcing full inspection and controls for corporate and high‑risk destinations, balancing user experience and security.  

**Source:** NetSec‑Pro syllabus – Connectivity and Security (remote user connectivity options).  

---

## Question 132

Which design most effectively secures communication between multiple on‑premises sites and cloud workloads while minimizing operational complexity?  

A. Independent site‑to‑site VPN tunnels from each branch to each cloud VPC.  
B. A hub‑and‑spoke design using Prisma SD‑WAN or centralized NGFW hubs, with Cloud NGFW or VM‑Series protecting cloud workloads.  
C. Only using local firewalls at each site with no connectivity to the cloud.  
D. Static routes configured separately on every VPN tunnel.  

**Correct answer:** B  

**Explanation:** A hub‑and‑spoke architecture using SD‑WAN or centralized NGFW hubs simplifies routing and security, while Cloud NGFW or VM‑Series handle security close to cloud workloads, reducing complexity compared to full mesh VPNs.  

**Source:** NetSec‑Pro syllabus – Connectivity and Security (network security of on‑premises and hybrid networks).  

---

## Question 133

Which is an example of using **tags** and **Dynamic Address Groups (DAGs)** to automate security?  

A. Manually updating IP addresses in address objects every time a server moves.  
B. Automatically adding new cloud workloads to a DAG when they are tagged “prod‑web” in the orchestrator, with Security policies referencing that DAG.  
C. Using static IP lists imported once a year.  
D. Configuring one large DAG containing all IPs.  

**Correct answer:** B  

**Explanation:** Tags from orchestrators or automation tools can dynamically populate DAGs so that Security policies follow workloads as they move or scale, reducing manual policy maintenance.  

**Source:** NetSec‑Pro syllabus – Infrastructure Management and CDSS (dynamic objects and automation).  

---

## Question 134

Which method helps validate that newly created Security rules are actually protecting traffic as intended?  

A. Assume they work if no user complaints are received.  
B. Use Policy Hit Counters, test traffic, and review Traffic and Threat logs for matches to the new rules.  
C. Disable logging on the new rules.  
D. Only check the running configuration XML.  

**Correct answer:** B  

**Explanation:** Policy Hit Counters combined with targeted testing and log review confirm that traffic is matching the intended rules and that associated Security Profiles are triggering as designed.  

**Source:** NetSec‑Pro syllabus – Maintenance and Configuration (monitoring and troubleshooting).  

---

## Question 135

A new data center segment will host sensitive workloads that require strict compliance controls. Which approach best aligns with NetSec‑Pro guidance for connectivity and security?  

A. Place the segment in the same zone as general user traffic and differentiate only with IP addresses.  
B. Create dedicated zones and Security policies with decryption, full Security Profiles, and tight access controls; consider separate virtual routers if routing isolation is required.  
C. Allow any traffic from trusted internal networks to the new segment.  
D. Rely on external IDS only and leave NGFW in monitoring mode.  

**Correct answer:** B  

**Explanation:** Sensitive workloads should be placed in dedicated zones with least‑privilege access, strong inspection (including decryption and Security Profiles), and possibly routing isolation, aligning with Zero Trust and compliance requirements.  

**Source:** NetSec‑Pro syllabus – Connectivity and Security (on‑premises and hybrid network protections).  

---

## Question 136

Which configuration is most appropriate to prevent users from accessing newly registered, potentially risky domains?  

A. Create a custom URL category and manually add all new domains.  
B. Use URL Filtering with the “newly‑registered‑domain” (or equivalent emerging risk) URL category set to block or alert.  
C. Block only the “malware” URL category.  
D. Disable URL Filtering and rely on DNS Security only.  

**Correct answer:** B  

**Explanation:** URL Filtering categories that identify newly registered or low‑reputation domains help block domains frequently used in phishing and early‑stage attacks, before they appear in traditional malware lists.  

**Source:** NetSec‑Pro syllabus – Platform Solutions, Services, and Tools (URL Filtering and CDSS).  

---

## Question 137

Which statement best describes the function of a **Log Forwarding profile** on a Palo Alto Networks firewall?  

A. It determines which logs are stored in the local log database only.  
B. It specifies how logs are forwarded to external destinations such as Panorama, syslog, SIEM, or Strata Logging Service.  
C. It configures log rotation schedules.  
D. It controls what log information is visible in the GUI.  

**Correct answer:** B  

**Explanation:** Log Forwarding profiles define which log types and severities are forwarded and to which external destinations, enabling integration with Panorama, SIEMs, syslog servers, and cloud logging services.  

**Source:** NetSec‑Pro syllabus – Maintenance and Configuration (monitoring and logging).  

---

## Question 138

A security engineer wants to ensure that sessions initiated from the internet cannot spoof internal IP addresses as their source. Which configuration best addresses this requirement?  

A. Create a Decryption policy for all inbound traffic.  
B. Enable IP spoofing protection in Zone Protection profiles on untrusted zones.  
C. Disable routing on the untrusted interface.  
D. Use Dynamic DNS on all interfaces.  

**Correct answer:** B  

**Explanation:** IP spoofing protection in Zone Protection profiles checks whether packets arriving on an interface have valid source IPs according to the routing table, helping to block spoofed internal addresses from untrusted networks.  

**Source:** NetSec‑Pro syllabus – Network Security Fundamentals (Zone Protection and hardening).  

---

## Question 139

Which practice helps minimize the impact of a compromised admin account on Panorama or SCM?  

A. Use a single shared admin account with superuser permissions.  
B. Enforce role‑based access control (RBAC) with least‑privilege roles and strong multi‑factor authentication.  
C. Disable password complexity to make logins easier.  
D. Allow admin access from any internet IP.  

**Correct answer:** B  

**Explanation:** RBAC with least‑privilege roles and MFA limits what a compromised account can do and reduces the likelihood of compromise, aligning with security best practices for management plane access.  

**Source:** NetSec‑Pro syllabus – Infrastructure Management and CDSS (SCM/Panorama and access control).  

---

## Question 140

A firewall is deployed in Layer 3 mode at the edge of a data center. Which configuration is required so that it can route traffic between internal and external networks?  

A. Only virtual wires with no IP addressing.  
B. Layer 3 interfaces with assigned IP addresses, zones, and a virtual router with appropriate routes.  
C. Only VLAN interfaces with no virtual router.  
D. Only loopback interfaces with static ARP entries.  

**Correct answer:** B  

**Explanation:** In Layer 3 mode, interfaces need IP addresses, zone assignments, and a virtual router configuration with static or dynamic routes so the firewall can forward traffic between networks.  

**Source:** NetSec‑Pro syllabus – Network Security Fundamentals (firewall deployment modes and routing).  

---

## Question 141

Which configuration best ensures that configuration changes on a firewall are tracked and can be reverted if necessary?  

A. Rely solely on auto‑commit messages.  
B. Use configuration versions and Named Configurations, and optionally export them to external storage.  
C. Disable configuration logging to reduce overhead.  
D. Allow only CLI access and avoid the GUI.  

**Correct answer:** B  

**Explanation:** Saving configuration versions and Named Configurations, and exporting them when needed, provides a history of changes and a way to roll back to known‑good configurations if issues arise.  

**Source:** NetSec‑Pro syllabus – Maintenance and Configuration (backup and rollback).  

---

## Question 142

A company wants to onboard a large number of firewalls into Strata Cloud Manager with minimal manual effort. Which approach is most appropriate?  

A. Configure each firewall manually in the GUI and add it individually to SCM.  
B. Use Zero Touch Provisioning (ZTP) or bootstrap automation and register devices into SCM tenant, then apply templates and device groups.  
C. Only configure local admins and avoid SCM.  
D. Use only CLI scripts per firewall without SCM.  

**Correct answer:** B  

**Explanation:** ZTP or bootstrapping combined with SCM device registration allows automated onboarding of many firewalls, after which templates and device groups can be applied centrally for consistent configuration.  

**Source:** NetSec‑Pro syllabus – Infrastructure Management and CDSS (SCM onboarding and automation).  

---

## Question 143

Which statement best describes a **best practice for rulebase organization** in a large deployment?  

A. Place generic any‑any rules at the top for simplicity.  
B. Group rules by function (for example, infrastructure, user access, data center) and use rule tagging and descriptions for clarity.  
C. Use random ordering and rely on hit counts.  
D. Put all deny rules at the bottom without logging.  

**Correct answer:** B  

**Explanation:** Organizing rules by function, using tags and clear descriptions, helps with readability, troubleshooting, and ongoing maintenance, while still respecting top‑down evaluation logic.  

**Source:** NetSec‑Pro syllabus – Maintenance and Configuration (policy optimization and auditing).  

---

## Question 144

A remote user connects to GlobalProtect and can browse the internet through Prisma Access, but cannot reach on‑premises internal applications. Prisma Access has Service Connections configured. Which is the most likely missing element?  

A. URL Filtering.  
B. Appropriate routing and Security policy on the data center firewall or Service Connection to allow traffic from Prisma Access subnets.  
C. Antivirus profiles on all rules.  
D. HIP checks on the user’s device.  

**Correct answer:** B  

**Explanation:** Even with Service Connections, routing and Security policy must allow traffic from Prisma Access‑assigned IP ranges into internal networks; missing routes or rules commonly cause access failures to on‑prem apps.  

**Source:** NetSec‑Pro syllabus – Connectivity and Security (remote user access to private applications via Prisma Access).  

---

## Question 145

Which feature of Prisma SD‑WAN helps maintain application performance when one WAN link starts to experience high packet loss?  

A. DNS sinkhole.  
B. Dynamic path selection based on real‑time path quality metrics.  
C. Static default routing.  
D. Manual failover via CLI only.  

**Correct answer:** B  

**Explanation:** Prisma SD‑WAN monitors path quality (latency, jitter, loss) and uses dynamic path selection to steer applications to better‑performing links, preserving user experience when a link degrades.  

**Source:** NetSec‑Pro syllabus – NGFW and SASE Solution Functionality (Prisma SD‑WAN).  

---

## Question 146

A security engineer wants to ensure that SaaS usage is visible and categorized, even if applications run on non‑standard ports or over HTTPS. Which feature is required?  

A. Only URL Filtering categories.  
B. App‑ID combined with SSL decryption when possible.  
C. Static port‑based ACLs.  
D. DNS Security.  

**Correct answer:** B  

**Explanation:** App‑ID identifies applications regardless of ports, and SSL decryption (where allowed) enables App‑ID to see application signatures inside TLS, providing more accurate SaaS visibility and control.  

**Source:** NetSec‑Pro syllabus – Network Security Fundamentals (App‑ID and decryption).  

---

## Question 147

Which deployment choice provides the most granular segmentation inside a Kubernetes cluster with CN‑Series?  

A. Run CN‑Series as a single perimeter firewall only at the node level.  
B. Integrate CN‑Series with Kubernetes metadata to enforce policy based on namespaces, labels, and services.  
C. Use only traditional VLANs and ignore Kubernetes constructs.  
D. Use only NodePort services with no inspection.  

**Correct answer:** B  

**Explanation:** CN‑Series can leverage Kubernetes metadata (labels, namespaces, services) to apply granular micro‑segmentation policies between workloads inside the cluster, beyond simple node‑level perimeters.  

**Source:** NetSec‑Pro syllabus – NGFW and SASE Solution Functionality (CN‑Series and workload security).  

---

## Question 148

Which best describes how to safely test new Security Profiles before fully enforcing them in production?  

A. Immediately set all actions to block and push to all devices.  
B. Deploy profiles initially in alert or log‑only mode on selected rules, review logs, tune as needed, then gradually move to stricter actions.  
C. Disable the profiles on all rules until an incident occurs.  
D. Apply profiles only to lab firewalls and never to production.  

**Correct answer:** B  

**Explanation:** Rolling out new Security Profiles in alert mode on a subset of rules allows administrators to observe behavior, reduce false positives, and tune settings before applying stricter enforcement widely.  

**Source:** NetSec‑Pro syllabus – Platform Solutions, Services, and Tools (profile tuning and best practices).  

---

## Question 149

Which configuration helps ensure that firewall and Prisma Access subscriptions (such as CDSS) remain active without manual intervention?  

A. Disable license checks to avoid alerts.  
B. Configure support and license auto‑renewal processes, and ensure connectivity from devices to update and license servers via appropriate service routes.  
C. Only renew licenses after they expire.  
D. Use local license files only.  

**Correct answer:** B  

**Explanation:** Maintaining connectivity to update and license servers (via service routes) and using auto‑renewal processes ensures that subscriptions like CDSS remain current and active without frequent manual steps.  

**Source:** NetSec‑Pro syllabus – Infrastructure Management and CDSS (licensing and updates).  

---

## Question 150

A security operations team wants to quickly identify which threats are most prevalent across all NGFWs and Prisma Access locations. Which tool or view is best suited for this?  

A. Only Traffic logs on a single firewall.  
B. Central dashboards and analytics in Panorama or Strata Cloud Manager that aggregate Threat logs across devices.  
C. Local CLI “show session all” on each firewall.  
D. Only URL Filtering logs.  

**Correct answer:** B  

**Explanation:** Central dashboards and analytics in Panorama or SCM aggregate Threat logs from many devices, providing a consolidated view of prevalent threats and trends across the entire deployment.  

**Source:** NetSec‑Pro syllabus – Infrastructure Management and CDSS (centralized monitoring and logging).  

---

## Question 151

Which feature allows a firewall administrator to define reusable sets of match criteria (applications, users, services, and URL categories) that can be referenced by multiple Security rules?  

A. Application filters.  
B. Security Profiles.  
C. Security policy objects (Security policy match objects or groups).  
D. Zone Protection profiles.  

**Correct answer:** C  

**Explanation:** Security policy match objects (for example, groups of applications, users, services, and URL categories) can be created and reused across multiple rules, simplifying rulebase management and ensuring consistency.  

**Source:** NetSec‑Pro syllabus – Maintenance and Configuration (policy optimization).  

---

## Question 152

A security engineer needs to allow SSH access for administrators from a management subnet to firewalls while blocking SSH from all other networks. Which configuration meets this requirement?  

A. GlobalProtect portal with any‑any Security rule.  
B. A specific Security rule allowing SSH from the management subnet to firewall management IPs, followed by a deny rule for SSH from other sources.  
C. A Decryption policy allowing SSH to the firewall.  
D. A URL Filtering profile allowing “remote‑access” category.  

**Correct answer:** B  

**Explanation:** Creating explicit allow rules for SSH from the management subnet and deny rules for SSH from all other sources follows least privilege and protects management access.  

**Source:** NetSec‑Pro syllabus – Connectivity and Security (management access hardening).  

---

## Question 153

Which statement best describes the difference between **shared** and **local** objects when using Panorama or SCM?  

A. Shared objects can be used by multiple device groups, while local objects exist only on a specific firewall or device group.  
B. Local objects are automatically synchronized across all firewalls.  
C. Shared objects are created only on firewalls, not in Panorama or SCM.  
D. There is no functional difference; the names are interchangeable.  

**Correct answer:** A  

**Explanation:** Shared objects (for example, address and service objects) are visible to multiple device groups and can be used across many firewalls, whereas local objects are scoped to a single device or device group, limiting reuse.  

**Source:** NetSec‑Pro syllabus – Infrastructure Management and CDSS (Panorama/SCM object management).  

---

## Question 154

Which configuration helps ensure that new applications introduced in the environment are visible for review before being allowed broadly?  

A. An any‑any allow rule with no logging.  
B. A catch‑all rule at the bottom that denies unknown applications and logs them, combined with reports on unknown traffic.  
C. Turning off App‑ID to avoid unknown applications.  
D. Only using IP‑based rules.  

**Correct answer:** B  

**Explanation:** A final deny rule that logs unknown applications ensures that new or unclassified traffic is visible in logs, allowing administrators to review and create appropriate policies before allowing it.  

**Source:** NetSec‑Pro syllabus – Network Security Fundamentals (policy evaluation and visibility).  

---

## Question 155

A firewall administrator wants to see which URLs users are visiting that are categorized as “high‑risk.” Which log type and filter should be used?  

A. Traffic logs with action = allow.  
B. URL Filtering logs with category = high‑risk (or equivalent high‑risk category) filter.  
C. Threat logs with severity = critical.  
D. System logs with subtype = url.  

**Correct answer:** B  

**Explanation:** URL Filtering logs record web access categorized by URL category; filtering for high‑risk categories shows which users and destinations fall into those risk classifications.  

**Source:** NetSec‑Pro syllabus – Platform Solutions, Services, and Tools (URL Filtering monitoring).  

---

## Question 156

Which is the primary purpose of the **ACC (Application Command Center)** in the firewall or Panorama GUI?  

A. To configure Security policies.  
B. To provide interactive visual summaries of applications, users, and threats for traffic analysis and troubleshooting.  
C. To manage licenses.  
D. To configure high availability.  

**Correct answer:** B  

**Explanation:** The ACC provides visual dashboards summarizing applications, users, and threats seen by the firewall, supporting analysis, investigation, and policy tuning.  

**Source:** NetSec‑Pro syllabus – Maintenance and Configuration (monitoring and troubleshooting).  

---

## Question 157

Which configuration helps ensure that remote users connecting via GlobalProtect can resolve internal DNS names correctly?  

A. Configure only public DNS servers on the endpoint.  
B. Configure internal DNS servers in the GlobalProtect gateway or agent configuration for connected clients.  
C. Use only host files on each endpoint.  
D. Disable DNS over TLS.  

**Correct answer:** B  

**Explanation:** Setting internal DNS servers in the GlobalProtect configuration ensures that connected users can resolve internal hostnames over the VPN tunnel, enabling access to internal applications.  

**Source:** NetSec‑Pro syllabus – Connectivity and Security (remote user connectivity).  

---

## Question 158

Which statement best describes the role of **fast path vs slow path** in packet inspection on the NGFW?  

A. Fast path handles cleartext traffic, slow path handles encrypted traffic.  
B. Slow path is used for first‑packet inspection and session setup, while fast path handles subsequent packets once the session is classified.  
C. Fast path is for outbound traffic, slow path for inbound traffic.  
D. Slow path is used only in HA environments.  

**Correct answer:** B  

**Explanation:** The NGFW uses a slow path for initial session evaluation, including App‑ID and policy lookup; once classified, subsequent packets go through a fast path for efficient processing.  

**Source:** NetSec‑Pro syllabus – Network Security Fundamentals (slow path and fast path).  

---

## Question 159

A company wants to allow contractors limited access to specific internal web applications without installing an agent. Which solution is most appropriate?  

A. GlobalProtect with Always‑On VPN.  
B. Prisma Access or NGFW with clientless VPN (browser‑based portal) providing access to selected internal web apps.  
C. Full mesh site‑to‑site VPN from contractor networks.  
D. No VPN; rely only on URL Filtering.  

**Correct answer:** B  

**Explanation:** Clientless VPN provides browser‑based access to specific internal web applications without requiring a full VPN client, making it suitable for contractors needing limited access.  

**Source:** NetSec‑Pro syllabus – Connectivity and Security (remote user access options).  

---

## Question 160

Which is an appropriate use of a **log‑only Security rule** in a production environment?  

A. To permanently allow traffic without restrictions.  
B. To monitor specific traffic patterns (for example, new applications or destinations) before deciding on enforcement actions.  
C. To disable logging for all rules above it.  
D. To replace Threat logs.  

**Correct answer:** B  

**Explanation:** A log‑only rule can be used to observe particular traffic types, collect data, and support decisions about future enforcement policies without immediately blocking or allowing that traffic.  

**Source:** NetSec‑Pro syllabus – Maintenance and Configuration (policy tuning and monitoring).  

---

## Question 161

Which scenario demonstrates a correct use case for **policy‑based forwarding (PBF)** on an NGFW?  

A. Forcing all traffic through the default route regardless of application.  
B. Steering specific applications (for example, Office 365) through a dedicated ISP link while other traffic uses a different path.  
C. Replacing the need for static or dynamic routing.  
D. Automatically balancing all traffic across all links.  

**Correct answer:** B  

**Explanation:** PBF can direct specific traffic (e.g., particular applications or destinations) through chosen next hops, enabling scenarios like sending Office 365 over a higher‑quality link while other traffic uses another path.  

**Source:** NetSec‑Pro syllabus – Connectivity and Security (traffic steering and connectivity).  

---

## Question 162

A firewall administrator needs to ensure that only approved IPsec VPN peers can connect to the firewall. Which configuration is essential?  

A. Configure LACP on all interfaces.  
B. Configure IKE peer authentication using pre‑shared keys or certificates matching specific peer identities.  
C. Disable NAT on all interfaces.  
D. Enable App‑ID for IKE traffic.  

**Correct answer:** B  

**Explanation:** IKE peer authentication with pre‑shared keys or certificates verifies that only authorized peers can establish VPN tunnels, preventing unauthorized VPN connections.  

**Source:** NetSec‑Pro syllabus – Connectivity and Security (VPN and IPsec configuration).  

---

## Question 163

Which operation is recommended after importing a server certificate and key for SSL Inbound Inspection?  

A. Assign the certificate to the SSL/TLS service profile used by the inbound inspection rule.  
B. Delete the root CA from the firewall.  
C. Disable decryption to avoid certificate errors.  
D. Change the certificate to self‑signed.  

**Correct answer:** A  

**Explanation:** The imported server certificate and key must be referenced in an SSL/TLS service profile, which is then used in the inbound inspection policy so the firewall can decrypt and inspect inbound TLS traffic.  

**Source:** NetSec‑Pro syllabus – Network Security Fundamentals (SSL Inbound Inspection configuration).  

---

## Question 164

Which use case best fits **Enterprise Browser** as part of Prisma SASE?  

A. Providing a browser‑based environment that enforces corporate controls for SaaS and web access on unmanaged or BYOD endpoints.  
B. Replacing all NGFWs in the data center.  
C. Only providing SSH access for administrators.  
D. Serving as a local browser on the NGFW itself.  

**Correct answer:** A  

**Explanation:** Enterprise Browser extends SASE controls to unmanaged and BYOD endpoints via a managed browser environment, enforcing corporate policies for SaaS and web access without full device management.  

**Source:** NetSec‑Pro syllabus – NGFW and SASE Solution Functionality (Prisma SASE components).  

---

## Question 165

Which design consideration is most important when building a highly available pair of NGFWs for internet edge protection?  

A. Use only one upstream router.  
B. Ensure redundant links, proper HA configuration (active/passive or active/active as needed), and synchronized configuration and content versions.  
C. Disable HA sync to avoid accidental changes.  
D. Use different PAN‑OS versions on each firewall for diversity.  

**Correct answer:** B  

**Explanation:** Internet edge HA requires redundant links and devices with correctly configured HA (active/passive or active/active), and both units must keep synchronized configuration and content versions to ensure consistent behavior during failover.  

**Source:** NetSec‑Pro syllabus – Maintenance and Configuration (HA design and operation).  

---

## Question 166

Which statement best describes the role of **security zones** when designing segmentation between campus, branch, and data center networks?  

A. Zones are optional and only used for QoS.  
B. Zones provide the primary logical boundary for Security policies, enabling control of traffic between user, server, and DMZ segments.  
C. Zones are created automatically based on VLAN IDs.  
D. Zones are only used on Prisma Access, not on NGFWs.  

**Correct answer:** B  

**Explanation:** Security zones define logical trust boundaries and are the fundamental constructs used to apply Security policies between different parts of the network, such as user, server, and DMZ segments.  

**Source:** NetSec‑Pro syllabus – Network Security Fundamentals (network segmentation).  

---

## Question 167

A company uses both on‑premises NGFWs and Prisma Access. They want consistent URL Filtering and Threat Prevention behavior across both. Which approach is most appropriate?  

A. Configure separate, unrelated URL Filtering and Threat profiles on each device.  
B. Use centrally managed Security profiles and objects in Panorama or SCM that are reused across NGFWs and Prisma Access.  
C. Disable Threat Prevention on Prisma Access and use it only on NGFWs.  
D. Rely only on DNS Security to control URLs.  

**Correct answer:** B  

**Explanation:** Central management via Panorama or SCM allows Security profiles and objects (URL Filtering, Threat Prevention, etc.) to be defined once and applied consistently across NGFWs and Prisma Access, ensuring uniform behavior.  

**Source:** NetSec‑Pro syllabus – Infrastructure Management and CDSS (centralized management with Panorama/SCM).  

---

## Question 168

Which deployment choice is most appropriate when you need to secure traffic between microservices running in the same Kubernetes cluster?  

A. Use only an external perimeter firewall.  
B. Deploy CN‑Series firewalls integrated with Kubernetes to enforce policies based on namespace, labels, and services.  
C. Use only VLANs for segmentation.  
D. Use a single large Layer 3 zone for all services.  

**Correct answer:** B  

**Explanation:** CN‑Series integrates with Kubernetes metadata and can enforce micro‑segmentation between services inside the cluster, providing workload‑level security beyond a simple perimeter firewall.  

**Source:** NetSec‑Pro syllabus – NGFW and SASE Solution Functionality (CN‑Series for workload security).  

---

## Question 169

Which action is recommended to reduce the risk of outages when enabling SSL Forward Proxy decryption for the first time?  

A. Enable decryption for all traffic without exceptions.  
B. Start with a limited scope (for example, selected user groups or URL categories), monitor logs and user feedback, and gradually expand coverage.  
C. Disable all Security Profiles during decryption rollout.  
D. Exclude all banking and healthcare sites and never review the exclusions.  

**Correct answer:** B  

**Explanation:** Gradually rolling out decryption to limited traffic segments and monitoring behavior allows issues (such as application incompatibilities) to be identified and resolved before full deployment, reducing outage risk.  

**Source:** NetSec‑Pro syllabus – Network Security Fundamentals (decryption deployment best practices).  

---

## Question 170

A firewall administrator wants to create a rule that blocks file downloads of specific types (for example, .exe) from unknown or high‑risk websites. Which combination is most appropriate?  

A. Threat profile only.  
B. URL Filtering profile only.  
C. File‑Blocking profile combined with URL Filtering categories for high‑risk or unknown sites.  
D. DNS Security only.  

**Correct answer:** C  

**Explanation:** A File‑Blocking profile targeting specific file types, together with URL Filtering that focuses on high‑risk or unknown categories, effectively reduces the risk of malicious executable downloads.  

**Source:** NetSec‑Pro syllabus – Platform Solutions, Services, and Tools (file control and URL Filtering).  

---

## Question 171

Which statement best describes the advantage of using **application groups** and **application filters** in App‑ID?  

A. They allow dynamic grouping of applications based on characteristics or categories, simplifying policy creation and maintenance.  
B. They disable App‑ID and revert to port‑based rules.  
C. They are used only for QoS policies.  
D. They automatically block all unknown applications.  

**Correct answer:** A  

**Explanation:** Application groups and filters allow administrators to group multiple applications by tags or categories (for example, collaboration, file‑sharing), so policies can reference these groups rather than many individual applications.  

**Source:** NetSec‑Pro syllabus – Network Security Fundamentals (App‑ID usage and optimization).  

---

## Question 172

A security team wants to ensure that sensitive data patterns such as credit card numbers are not sent from internal users to external email and SaaS applications. Which capability is primarily required?  

A. DNS sinkhole.  
B. Enterprise DLP with detection profiles for sensitive data and enforcement in NGFW and Prisma Access policies.  
C. Antivirus signatures.  
D. Basic URL Filtering.  

**Correct answer:** B  

**Explanation:** Enterprise DLP uses data patterns and profiles to detect sensitive information crossing security boundaries and can enforce policies across NGFW, Prisma Access, and SaaS channels to prevent data exfiltration.  

**Source:** NetSec‑Pro syllabus – Infrastructure Management and CDSS (Enterprise DLP).  

---

## Question 173

Which scenario is a good fit for using **GlobalProtect clientless VPN** instead of the full GlobalProtect agent?  

A. Always‑on VPN for corporate laptops.  
B. Occasional access by third‑party contractors to a small set of internal web applications.  
C. Full tunnel access for all on‑premises users.  
D. Encrypted SD‑WAN tunnels between branches.  

**Correct answer:** B  

**Explanation:** Clientless VPN is ideal for occasional web‑based access to specific internal applications without installing an agent, which fits contractor or partner use cases.  

**Source:** NetSec‑Pro syllabus – Connectivity and Security (remote user access methods).  

---

## Question 174

A firewall administrator notices a large amount of “incomplete” sessions in the Traffic logs from a specific external IP. What is a likely explanation?  

A. The firewall is misconfigured and dropping all traffic.  
B. The external source may be performing port scans or failing to complete TCP handshakes, leading to incomplete sessions.  
C. The user is downloading large files.  
D. DNS Security is disabled.  

**Correct answer:** B  

**Explanation:** Many incomplete sessions from the same source may indicate scanning or failed connection attempts where the handshake is not completed, often associated with reconnaissance or misbehaving clients.  

**Source:** NetSec‑Pro syllabus – Maintenance and Configuration (troubleshooting traffic logs).  

---

## Question 175

Which configuration is recommended to ensure that only secure versions of TLS are used for management access (for example, web UI) to the firewall?  

A. Configure an SSL/TLS service profile for management and restrict allowed TLS versions and ciphers.  
B. Enable Telnet for easier troubleshooting.  
C. Disable HTTPS and use only HTTP.  
D. Use default global settings without review.  

**Correct answer:** A  

**Explanation:** Assigning an SSL/TLS service profile that allows only secure protocol versions and ciphers to the management interface ensures that administrative access is protected by strong encryption.  

**Source:** NetSec‑Pro syllabus – Maintenance and Configuration (management plane hardening).  

---

## Question 176

Which best describes how **Cloud Identity Engine** supports policy creation in Prisma Access and NGFW deployments?  

A. It replaces all on‑premises directories.  
B. It aggregates identity information from multiple directories and identity providers, providing a unified source of user and group information for policy.  
C. It is used only for license management.  
D. It can only provide IP addresses, not user identities.  

**Correct answer:** B  

**Explanation:** Cloud Identity Engine collects identity data from different sources and exposes a unified user and group view, enabling consistent identity‑based policies across Prisma Access and NGFW environments.  

**Source:** NetSec‑Pro syllabus – Connectivity and Security (identity for remote users and hybrid deployments).  

---

## Question 177

An enterprise wants to detect and control unmanaged IoT devices connected across multiple sites. Which combination is most appropriate?  

A. Only VLAN segmentation.  
B. Enable IoT Security integration with NGFWs, use Device‑ID for profiling, and apply recommended policies based on device types and risk scores.  
C. Rely solely on endpoint antivirus.  
D. Use DNS sinkhole only.  

**Correct answer:** B  

**Explanation:** IoT Security works with NGFWs to profile devices using Device‑ID, assign risk scores, and generate policy recommendations, enabling control of unmanaged and IoT devices across sites.  

**Source:** NetSec‑Pro syllabus – Infrastructure Management and CDSS (IoT Security).  

---

## Question 178

Which statement best describes how **AIOps for NGFW** can support operations teams?  

A. It replaces the need for any firewall administrators.  
B. It analyzes telemetry from firewalls and provides proactive alerts, health checks, and best‑practice recommendations.  
C. It is used only for license activation.  
D. It applies Security policies automatically without review.  

**Correct answer:** B  

**Explanation:** AIOps collects operational telemetry, checks it against best practices and health baselines, and generates proactive alerts and recommendations to help administrators maintain reliable and secure firewall deployments.  

**Source:** NetSec‑Pro syllabus – Platform Solutions, Services, and Tools (AIOps and best practices).  

---

## Question 179

A branch firewall has two default routes with equal metric to different ISPs. The administrator wants to use both links for outbound traffic while maintaining session symmetry. Which configuration is appropriate?  

A. Use ECMP (Equal‑Cost Multi‑Path) routing on the virtual router.  
B. Configure only one default route and disable the other.  
C. Use only policy‑based forwarding without routing.  
D. Disable dynamic routing.  

**Correct answer:** A  

**Explanation:** ECMP allows the firewall to load‑balance traffic over multiple equal‑cost routes, using both ISP links for outbound traffic while preserving session consistency according to the ECMP algorithm.  

**Source:** NetSec‑Pro syllabus – Connectivity and Security (routing and multiple links).  

---

## Question 180

Which statement best describes how **content updates** (Applications and Threats, WildFire, etc.) should be managed in a production environment?  

A. Disable automatic updates and only update once a year.  
B. Configure scheduled automatic downloads and installs, optionally using a staggered rollout (test group then full deployment).  
C. Install every new content update immediately and globally with no testing.  
D. Avoid installing any updates to keep behavior stable.  

**Correct answer:** B  

**Explanation:** Scheduled automatic updates with a phased rollout allow organizations to keep signatures current while testing updates on a subset of devices before deploying them widely, balancing security and stability.  

**Source:** NetSec‑Pro syllabus – NGFW and SASE Solution Maintenance and Configuration (updates and upgrades).  

---

## Question 181

Which situation is a good candidate for using a **loopback interface** on a Palo Alto Networks firewall?  

A. To provide an IP address for virtual wire interfaces.  
B. To host services such as GlobalProtect portals/gateways or management access that remain reachable regardless of physical interface state.  
C. To terminate all IPSec tunnels only.  
D. To provide DHCP services to clients.  

**Correct answer:** B  

**Explanation:** Loopback interfaces are logical and not tied to a single physical port, making them ideal for hosting services that should remain reachable as long as any appropriate route to the firewall exists, independent of a specific interface.  

**Source:** NetSec‑Pro syllabus – Connectivity and Security (interface types and design).  

---

## Question 182

Which configuration most effectively limits exposure of management services on an NGFW?  

A. Allow HTTPS, SSH, and ping from any zone.  
B. Restrict management access to specific management subnets and interfaces using Management Profile settings and Security policy.  
C. Enable Telnet for legacy devices.  
D. Expose the management interface directly to the internet.  

**Correct answer:** B  

**Explanation:** Limiting management access to trusted subnets and interfaces, and using Management Profiles plus Security rules, follows best practice for protecting the management plane from unauthorized access.  

**Source:** NetSec‑Pro syllabus – Maintenance and Configuration (management plane hardening).  

---

## Question 183

Which is a primary benefit of using **device groups** in Panorama or SCM?  

A. They handle only interface configuration.  
B. They allow centralized management of Security policies and objects for sets of firewalls that share similar policy requirements.  
C. They manage HA settings only.  
D. They are used solely for logging.  

**Correct answer:** B  

**Explanation:** Device groups in Panorama/SCM group firewalls by similar policy needs so that Security rules and shared objects can be defined once and applied consistently across many devices.  

**Source:** NetSec‑Pro syllabus – Infrastructure Management and CDSS (Panorama/SCM hierarchy).  

---

## Question 184

A security engineer wants to enforce different URL Filtering policies for staff and guests using the same wireless infrastructure. Which approach is most appropriate?  

A. Use the same Security rule and URL Filtering profile for all users.  
B. Use User‑ID or group mapping to identify staff vs guests and apply separate Security rules with different URL Filtering profiles.  
C. Use only IP‑based rules.  
D. Disable URL Filtering for guests.  

**Correct answer:** B  

**Explanation:** Identity‑aware policy using User‑ID or group mapping allows different URL Filtering profiles to be applied to staff and guests within separate Security rules, enforcing tailored web access controls.  

**Source:** NetSec‑Pro syllabus – Connectivity and Security (identity‑based controls).  

---

## Question 185

Which configuration is recommended to prevent users from bypassing SSL decryption controls by using external proxies or anonymizers?  

A. Allow all traffic to anonymizer and proxy categories.  
B. Block or tightly control URL categories for anonymizers and proxy sites, and use App‑ID to identify proxy applications.  
C. Disable URL Filtering.  
D. Only use DNS Security.  

**Correct answer:** B  

**Explanation:** Blocking or restricting anonymizer/proxy URL categories and applications stops users from tunneling traffic through untrusted proxies, which could bypass decryption and inspection.  

**Source:** NetSec‑Pro syllabus – Platform Solutions, Services, and Tools (URL Filtering and App‑ID).  

---

## Question 186

Which statement best describes the role of **NAT policy** relative to Security policy on a Palo Alto Networks firewall?  

A. NAT policy is evaluated before Security policy.  
B. Security policy is evaluated first, then NAT is applied if allowed.  
C. NAT policy and Security policy are evaluated simultaneously.  
D. NAT policy only affects management traffic.  

**Correct answer:** A  

**Explanation:** NAT policy evaluation occurs before Security policy; translated addresses are used for Security policy lookup, which is important when designing both NAT and Security rules.  

**Source:** NetSec‑Pro syllabus – Connectivity and Security (NAT and policy evaluation).  

---

## Question 187

A branch firewall is experiencing high CPU due to large volumes of logging. Which step is appropriate to reduce impact without losing critical visibility?  

A. Disable all logging globally.  
B. Adjust logging to focus on important rules (for example, deny rules and critical applications) and consider aggregating logs in Strata Logging Service or Panorama instead of retaining large local volumes.  
C. Turn off Threat logs only.  
D. Increase log retention to reduce rotation overhead.  

**Correct answer:** B  

**Explanation:** Prioritizing logging on significant rules and using centralized logging services reduces local resource impact while maintaining necessary visibility for security and compliance.  

**Source:** NetSec‑Pro syllabus – Maintenance and Configuration (logging strategy and CDSS).  

---

## Question 188

Which statement best describes **advanced URL categories** available through Cloud‑Delivered Security Services?  

A. They are static and updated only annually.  
B. They provide more granular, risk‑driven categorization (for example, risk‑based and new domains) that is updated frequently from cloud intelligence.  
C. They replace all standard URL categories.  
D. They are available only on CN‑Series.  

**Correct answer:** B  

**Explanation:** Advanced URL categories use frequent cloud updates and risk‑based metadata to provide finer control and earlier detection of risky or newly created domains, augmenting standard URL categories.  

**Source:** NetSec‑Pro syllabus – Platform Solutions, Services, and Tools (Advanced URL Filtering / CDSS).  

---

## Question 189

Which scenario best illustrates using **Prisma Access as a Secure Web Gateway (SWG)**?  

A. Only securing east‑west data center traffic.  
B. Directing all or specific user web traffic to Prisma Access for URL, threat, and data protection regardless of user location.  
C. Using Prisma Access only for site‑to‑site VPN.  
D. Replacing DNS servers with Prisma Access.  

**Correct answer:** B  

**Explanation:** Prisma Access can function as an SWG by steering user web traffic into the cloud service for URL Filtering, threat prevention, and data protection, ensuring consistent security for users everywhere.  

**Source:** NetSec‑Pro syllabus – NGFW and SASE Solution Functionality (Prisma Access).  

---

## Question 190

Which practice helps ensure that only validated configuration changes are pushed from Panorama or SCM to managed firewalls?  

A. Push changes directly from the candidate configuration without review.  
B. Use commit validation, configuration review workflows, and role‑based approvals before committing and pushing changes.  
C. Allow all users full admin rights.  
D. Disable logging of configuration changes.  

**Correct answer:** B  

**Explanation:** Commit validation and approval workflows, combined with RBAC, help ensure that only reviewed and validated changes are pushed to firewalls, reducing the chance of misconfigurations.  

**Source:** NetSec‑Pro syllabus – Infrastructure Management and CDSS (SCM/Panorama configuration management).  

---

## Question 191

Which configuration is most appropriate for providing **L3 segmentation** inside a campus where each building should have its own policy boundary?  

A. One large Layer 2 zone for the entire campus.  
B. Separate Layer 3 interfaces and zones per building, with Security policies controlling inter‑building traffic.  
C. Use only VLAN tags and no firewall.  
D. Use only a perimeter firewall and no internal segmentation.  

**Correct answer:** B  

**Explanation:** Assigning Layer 3 interfaces and zones per building allows the firewall to enforce policies between buildings, providing clear segmentation and control over inter‑building traffic.  

**Source:** NetSec‑Pro syllabus – Network Security Fundamentals (zone security and segmentation).  

---

## Question 192

A security engineer wants to ensure that sensitive admin actions (like policy changes and commits) are fully audited. Which configuration is most appropriate?  

A. Disable admin logging to avoid noise.  
B. Enable detailed admin activity logging and forward System and Configuration logs to a central logging solution (Panorama, SLS, or SIEM).  
C. Log only Traffic logs.  
D. Use only local admin logs on each device with no forwarding.  

**Correct answer:** B  

**Explanation:** Admin activity is recorded in System and Configuration logs; forwarding these to centralized logging ensures tamper‑resistant audit trails for admin actions.  

**Source:** NetSec‑Pro syllabus – Maintenance and Configuration (monitoring and logging).  

---

## Question 193

Which is an example of using **Prisma SD‑WAN and Prisma Access together** in a SASE design?  

A. Using Prisma SD‑WAN only for LAN switching.  
B. Using Prisma SD‑WAN to steer branch traffic to the best performing path toward Prisma Access, where security policies and inspection are applied.  
C. Replacing all NGFWs with SD‑WAN devices only.  
D. Using Prisma Access only for logging.  

**Correct answer:** B  

**Explanation:** In SASE, Prisma SD‑WAN optimizes connectivity and path selection for branch traffic, while Prisma Access provides cloud‑delivered security inspection and policy enforcement at the edge.  

**Source:** NetSec‑Pro syllabus – NGFW and SASE Solution Functionality (Prisma SD‑WAN and Prisma Access together).  

---

## Question 194

Which configuration choice helps ensure that all relevant traffic for a specific application is inspected by **Advanced Threat Prevention**?  

A. Allow the application with service “application‑default” and attach a Threat Prevention profile to the Security rule.  
B. Allow the application with service “any” and no profile.  
C. Use only URL Filtering.  
D. Disable App‑ID to avoid misclassification.  

**Correct answer:** A  

**Explanation:** Allowing an application with service “application‑default” ensures expected ports are used, and attaching a Threat Prevention profile ensures that the traffic is inspected for exploits and malware.  

**Source:** NetSec‑Pro syllabus – Platform Solutions, Services, and Tools (Advanced Threat Prevention and policy).  

---

## Question 195

Which statement best describes how **App‑ID, User‑ID, and Content‑ID** work together on the NGFW?  

A. They are mutually exclusive and cannot be used together.  
B. App‑ID identifies applications, User‑ID ties traffic to users, and Content‑ID inspects content, jointly enabling context‑rich, application‑, user‑, and content‑aware policy enforcement.  
C. Only App‑ID is required; the others are deprecated.  
D. User‑ID replaces the need for Content‑ID.  

**Correct answer:** B  

**Explanation:** App‑ID, User‑ID, and Content‑ID together provide a three‑dimensional view of traffic (application, user, and content), enabling precise, context‑aware Security policies.  

**Source:** NetSec‑Pro syllabus – Network Security Fundamentals (App‑ID, User‑ID, and Content‑ID).  

---

## Question 196

An administrator wants to allow only specific FQDNs as destinations in a Security policy (for example, partner‑api.example.com). Which feature is most appropriate?  

A. Static address objects with IP subnets.  
B. FQDN address objects that resolve DNS names to IPs dynamically.  
C. URL categories only.  
D. Zone Protection profiles.  

**Correct answer:** B  

**Explanation:** FQDN address objects dynamically resolve DNS names and update IP mappings, allowing Security policies to reference domain names instead of fixed IP addresses for specific destinations.  

**Source:** NetSec‑Pro syllabus – Connectivity and Security (address objects and dynamic addressing).  

---

## Question 197

A company wants to ensure that new NGFWs are deployed following consistent baseline configuration (interfaces, NTP, basic Security policies). Which method is most efficient?  

A. Configure each firewall manually.  
B. Use Panorama or SCM templates and device groups combined with bootstrap or ZTP for automated baseline deployment.  
C. Copy configuration files manually via FTP.  
D. Use only local default configuration.  

**Correct answer:** B  

**Explanation:** Templates and device groups in Panorama/SCM combined with bootstrap or ZTP automate deployment of consistent baseline configurations to new NGFWs, reducing manual effort and errors.  

**Source:** NetSec‑Pro syllabus – Infrastructure Management and CDSS (automation and onboarding).  

---

## Question 198

Which is a key benefit of integrating **Prisma Access** logs with Strata Logging Service and Panorama/SCM?  

A. It disables on‑device logging.  
B. It centralizes analysis and reporting for remote user and branch traffic alongside on‑premises NGFW logs.  
C. It only stores logs locally.  
D. It is used only for license checks.  

**Correct answer:** B  

**Explanation:** Sending Prisma Access logs to Strata Logging Service and viewing them via Panorama/SCM provides a unified view of security events across remote users, branches, and on‑premises environments.  

**Source:** NetSec‑Pro syllabus – Infrastructure Management and CDSS (logging and monitoring for Prisma Access).  

---

## Question 199

Which configuration example demonstrates proper use of **security profiles on a deny rule**?  

A. Not attaching any Security profile to deny rules.  
B. Attaching a Threat Prevention profile to a deny rule to gain visibility into attempted threats, while still blocking traffic.  
C. Using only URL Filtering on deny rules.  
D. Applying only Antivirus on deny rules.  

**Correct answer:** B  

**Explanation:** Applying Threat Prevention profiles to deny rules allows logging of attempted threats (for example, exploits and C2 connections) even though the traffic is blocked, providing additional visibility into attack attempts.  

**Source:** NetSec‑Pro syllabus – Network Security Fundamentals (policy logging and hardening).  

---

## Question 200

An administrator needs to troubleshoot why expected traffic is being blocked. Which combination of tools is most useful?  

A. Only the CLI “show session all.”  
B. Packet captures, Traffic and Threat logs, and the Test Policy Match tool (or equivalent) in the GUI.  
C. Only URL reports.  
D. Only System logs.  

**Correct answer:** B  

**Explanation:** Packet captures reveal packet‑level details, Traffic/Threat logs show how policies and profiles are applied, and Test Policy Match helps identify which rule would match given traffic parameters, together supporting effective troubleshooting.  

**Source:** NetSec‑Pro syllabus – Maintenance and Configuration (monitoring and troubleshooting).  

---

## Question 201

Which configuration option allows an NGFW to identify users without installing agents on all endpoints?  

A. Only local user database.  
B. User‑ID using server monitoring and syslog parsing from directory and authentication services.  
C. URL Filtering categories.  
D. DNS Security.  

**Correct answer:** B  

**Explanation:** User‑ID can map IPs to users by monitoring directory services and parsing syslog from authentication sources, reducing the need to deploy agents on every endpoint.  

**Source:** NetSec‑Pro syllabus – Network Security Fundamentals (User‑ID).  

---

## Question 202

A security engineer wants to restrict access to admin portals of cloud‑hosted applications (for example, admin.example.com) to only corporate IP ranges. Which combination is most appropriate?  

A. Configure URL Filtering only.  
B. Use FQDN address objects for admin portals and Security policies that only allow access from corporate public IPs or Prisma Access egress ranges.  
C. Disable DNS for admin portals.  
D. Use only Antivirus.  

**Correct answer:** B  

**Explanation:** FQDN address objects representing admin portals combined with Security policies limited to corporate IP ranges or Prisma Access egress ranges restrict access to authorized locations only.  

**Source:** NetSec‑Pro syllabus – Connectivity and Security (hybrid/cloud access controls).  

---

## Question 203

Which statement best describes how **zone‑based VPN** differs from traditional interface‑based VPN?  

A. Zone‑based VPN supports only GRE tunnels.  
B. Zone‑based VPN associates VPN tunnels directly with zones, allowing Security policy to be written between zones without referencing specific tunnel interfaces.  
C. Interface‑based VPN does not support redundancy.  
D. There is no difference; the terms are identical.  

**Correct answer:** B  

**Explanation:** Zone‑based VPN abstracts tunnels into zones, simplifying policy creation and making it easier to manage complex VPN topologies with consistent zone‑to‑zone rules.  

**Source:** NetSec‑Pro syllabus – Connectivity and Security (VPN connectivity models).  

---

## Question 204

Which is a recommended way to handle **high‑risk URL categories** such as malware and phishing?  

A. Set them to “allow” with no logging.  
B. Set them to “block” and log, optionally displaying a custom response page.  
C. Ignore these categories and rely on DNS Security only.  
D. Allow but disable all Security Profiles.  

**Correct answer:** B  

**Explanation:** High‑risk categories like malware and phishing should generally be blocked, and accesses logged, to prevent users from visiting known malicious sites while maintaining visibility.  

**Source:** NetSec‑Pro syllabus – Platform Solutions, Services, and Tools (URL Filtering best practices).  

---

## Question 205

Which metric in Threat logs is most useful for prioritizing which threats to investigate first?  

A. Log receive time only.  
B. Severity level combined with threat type (for example, exploit vs informational).  
C. Source zone only.  
D. Destination IP only.  

**Correct answer:** B  

**Explanation:** Severity level and threat type help prioritize investigation efforts toward critical and high‑severity exploits or malware, rather than informational events.  

**Source:** NetSec‑Pro syllabus – Maintenance and Configuration (threat visibility and triage).  

---

## Question 206

Which deployment model most closely aligns with using Prisma Access to secure **mobile users**?  

A. Site‑to‑site IPsec VPN only.  
B. GlobalProtect client or explicit proxy connecting user traffic to Prisma Access for inspection and policy enforcement.  
C. Direct internet access with only endpoint antivirus.  
D. MPLS private WAN only.  

**Correct answer:** B  

**Explanation:** Prisma Access secures mobile users by steering their traffic through GlobalProtect or explicit proxy connections into the cloud, where URL, threat, and data policies are applied.  

**Source:** NetSec‑Pro syllabus – NGFW and SASE Solution Functionality (Prisma Access for mobile users).  

---

## Question 207

A Security rule is configured to allow “any” application with service “application‑default” for a critical database subnet. Which is the primary risk?  

A. The rule will block all applications.  
B. Many applications may be allowed unintentionally, as “any” application includes all App‑IDs that use their default ports.  
C. App‑ID is disabled.  
D. URL Filtering will stop working.  

**Correct answer:** B  

**Explanation:** Allowing “any” application with service “application‑default” means any App‑ID running on its default ports is permitted, which may inadvertently allow unapproved applications.  

**Source:** NetSec‑Pro syllabus – Network Security Fundamentals (application‑aware policy).  

---

## Question 208

Which statement best describes the purpose of **Panorama device state** backups?  

A. They store only log data.  
B. They capture Panorama configuration, managed device information, and associated settings for disaster recovery.  
C. They back up only Security policies, not objects.  
D. They are used only for license information.  

**Correct answer:** B  

**Explanation:** Panorama device state backups capture the complete management configuration and managed device metadata, supporting recovery in case of Panorama failure.  

**Source:** NetSec‑Pro syllabus – Infrastructure Management and CDSS (Panorama backup and recovery).  

---

## Question 209

Which combination is most appropriate to ensure **north‑south and east‑west** inspection in a hybrid cloud environment?  

A. Perimeter NGFW only at headquarters.  
B. On‑premises NGFWs, plus VM‑Series or Cloud NGFW near cloud workloads, with Security policies for both inbound/outbound and inter‑segment traffic.  
C. Only security groups in the cloud.  
D. DNS sinkhole only.  

**Correct answer:** B  

**Explanation:** Hybrid designs typically combine on‑premises NGFWs with VM‑Series or Cloud NGFWs near cloud workloads to inspect traffic entering/exiting the environment and between segments inside cloud networks.  

**Source:** NetSec‑Pro syllabus – Connectivity and Security (on‑prem and hybrid network protections).  

---

## Question 210

Which method helps reduce the chance that unauthorized devices connect directly to a critical server subnet behind an NGFW?  

A. Only logging traffic.  
B. Using VLAN and Layer 3 segmentation, enforcing Security policies between user and server zones, and optionally using network access control (NAC).  
C. Allowing any device to join the subnet.  
D. Only relying on endpoint antivirus.  

**Correct answer:** B  

**Explanation:** Network segmentation combined with NGFW Security policies and NAC helps prevent unauthorized devices from directly accessing critical server subnets, aligning with Zero Trust principles.  

**Source:** NetSec‑Pro syllabus – Network Security Fundamentals (segmentation and Zero Trust).  

---

## Question 211

Which best practice helps avoid outages when changing Security policies on production NGFWs?  

A. Make large, simultaneous changes to many rules at once.  
B. Use staged changes, implement during maintenance windows when appropriate, and validate using test traffic and logging before and after changes.  
C. Never log changes.  
D. Disable commit confirmation.  

**Correct answer:** B  

**Explanation:** Staged changes and validation with test traffic and logs reduce the risk of unintentional disruptions caused by policy modifications.  

**Source:** NetSec‑Pro syllabus – Maintenance and Configuration (change management).  

---

## Question 212

Which configuration is required for Prisma Access remote networks to route traffic through the service?  

A. PPPoE tunnels from branches.  
B. IPsec tunnels from branch firewalls or routers to Prisma Access remote network locations with appropriate subnet advertisement.  
C. GRE tunnels only.  
D. No tunnel; direct internet access only.  

**Correct answer:** B  

**Explanation:** Remote networks connect to Prisma Access using IPsec tunnels that advertise branch subnets to the service, enabling Prisma Access to inspect and forward branch traffic.  

**Source:** NetSec‑Pro syllabus – NGFW and SASE Solution Functionality (Prisma Access remote networks).  

---

## Question 213

Which method allows administrators to centrally define and reuse **data patterns** for Enterprise DLP policies?  

A. Defining patterns only on each firewall separately.  
B. Creating DLP data patterns and profiles in the centralized DLP console or SCM and referencing them in policies on NGFWs and Prisma Access.  
C. Using URL categories as data patterns.  
D. Using only regular expressions on each rule.  

**Correct answer:** B  

**Explanation:** Enterprise DLP supports centralized definition of data patterns and profiles, which are then referenced in policies on NGFWs and Prisma Access, ensuring consistent data protection.  

**Source:** NetSec‑Pro syllabus – Infrastructure Management and CDSS (Enterprise DLP central management).  

---

## Question 214

A security engineer wants to simplify firewall rulebase reviews by highlighting rules with no hits over the last 90 days. Which capability is most useful?  

A. System logs.  
B. Policy rule **Hit Count** with time range filters.  
C. Only Traffic logs.  
D. Only Threat logs.  

**Correct answer:** B  

**Explanation:** Hit Count shows the number of sessions matching each rule within a specified time period, helping identify unused or redundant rules that might be candidates for cleanup.  

**Source:** NetSec‑Pro syllabus – Maintenance and Configuration (rulebase optimization).  

---

## Question 215

Which scenario best illustrates proper use of **GlobalProtect internal host detection**?  

A. Determining which users should be allowed GlobalProtect access.  
B. Automatically disabling VPN tunnels when endpoints are on trusted internal networks by detecting internal DNS or IP.  
C. Blocking split tunneling.  
D. Enforcing URL Filtering profiles.  

**Correct answer:** B  

**Explanation:** Internal host detection lets GlobalProtect determine if an endpoint is inside the corporate network (for example, by resolving a specific internal DNS name), and can disable VPN tunnels in that case.  

**Source:** NetSec‑Pro syllabus – Connectivity and Security (GlobalProtect behavior and user experience).  

---

## Question 216

Which configuration helps ensure that GlobalProtect users are assigned IP addresses that do not overlap with internal subnets?  

A. Configure GlobalProtect pools within existing data center subnets.  
B. Use dedicated IP pools for GlobalProtect, separate from internal network ranges, and ensure routing and Security policies account for them.  
C. Use DHCP from internal routers without planning.  
D. Use only IPv6.  

**Correct answer:** B  

**Explanation:** Using dedicated, non‑overlapping IP pools for GlobalProtect clients avoids address conflicts and simplifies routing and Security policy design.  

**Source:** NetSec‑Pro syllabus – Connectivity and Security (remote user addressing and routing).  

---

## Question 217

Which is a recommended way to handle **SSL decryption logs** for analysis and troubleshooting?  

A. Disable decryption logging to reduce noise.  
B. Use dedicated log filters and reports for decryption events, and forward relevant logs to centralized logging for review.  
C. Log only denied traffic.  
D. Only review logs locally on each firewall.  

**Correct answer:** B  

**Explanation:** Filtering and forwarding decryption logs to central logging allows administrators to see why sessions were or were not decrypted and to troubleshoot issues such as certificate errors and exclusions.  

**Source:** NetSec‑Pro syllabus – Maintenance and Configuration (monitoring decryption).  

---

## Question 218

A security engineer wants to use **Prisma Access** to enforce CASB‑like controls on SaaS apps. Which combination is appropriate?  

A. Prisma Access with only DNS Security.  
B. Prisma Access with App‑ID, URL Filtering, Enterprise DLP, and SaaS Security to inspect and control SaaS traffic.  
C. Prisma Access used only as a site‑to‑site VPN headend.  
D. Prisma Access with only Antivirus.  

**Correct answer:** B  

**Explanation:** CASB‑like controls in SASE are achieved by inspecting SaaS traffic using App‑ID, URL Filtering, Enterprise DLP, and SaaS Security, all of which can be enforced via Prisma Access.  

**Source:** NetSec‑Pro syllabus – Infrastructure Management and CDSS (SaaS Security and Prisma Access).  

---

## Question 219

Which method allows automation systems (for example, SOAR, CMDB) to update firewall policies based on asset or incident data?  

A. Manually editing the configuration.  
B. Using the XML/REST API on Panorama/SCM or the firewall to update tags, objects, and policies dynamically.  
C. Only using CLI scripts.  
D. Editing policy logs.  

**Correct answer:** B  

**Explanation:** The XML/REST API enables external systems to programmatically modify tags, address groups, and even policies, supporting automated responses and policy changes based on external data.  

**Source:** NetSec‑Pro syllabus – Infrastructure Management and CDSS (automation and APIs).  

---

## Question 220

Which statement best describes **single‑pass parallel processing (SP3)** architecture on Palo Alto Networks firewalls?  

A. Each packet is processed by multiple independent engines in several passes.  
B. A single pass through the engine performs App‑ID, Content‑ID, and User‑ID processing in parallel, improving performance and efficiency.  
C. It processes one session at a time.  
D. It only applies to hardware appliances.  

**Correct answer:** B  

**Explanation:** SP3 architecture performs application, user, and content inspection in a single pass through the engine, with parallel processing, reducing latency and maximizing performance.  

**Source:** NetSec‑Pro syllabus – Network Security Fundamentals (firewall processing architecture).  

---

## Question 221

Which is an appropriate use case for **tagging** Security rules?  

A. To change how rules are evaluated.  
B. To group rules by business application, owner, or project for easier filtering, reporting, and reviews.  
C. To disable rules automatically.  
D. To affect QoS behavior.  

**Correct answer:** B  

**Explanation:** Tags do not affect rule behavior but help organize rules logically (by application, owner, project), simplifying searches, reporting, and audits.  

**Source:** NetSec‑Pro syllabus – Maintenance and Configuration (rulebase organization).  

---

## Question 222

In a multi‑tenant Prisma Access environment, which design consideration is critical to maintain separation between different customer environments?  

A. Use the same Security policies and objects for all tenants.  
B. Maintain separate tenants or administrative domains, each with isolated policy sets, logs, and identity sources as required.  
C. Share all logs between tenants.  
D. Use a single user directory.  

**Correct answer:** B  

**Explanation:** Multi‑tenant designs require strong separation of policy, logging, and identity data, often implemented using separate tenants or admin domains to avoid cross‑tenant access or data leakage.  

**Source:** NetSec‑Pro syllabus – Infrastructure Management and CDSS (multi‑tenant considerations).  

---

## Question 223

Which scenario best illustrates the use of **Prisma Access Service Connections**?  

A. Direct user‑to‑internet browsing.  
B. Secure connectivity from Prisma Access to customer data centers so remote users and branches can reach internal applications.  
C. MPLS replacement between branches only.  
D. License activation.  

**Correct answer:** B  

**Explanation:** Service Connections provide connectivity between Prisma Access and customer data centers or hubs, enabling remote users and branches to securely access private/internal applications.  

**Source:** NetSec‑Pro syllabus – NGFW and SASE Solution Functionality (Prisma Access components).  

---

## Question 224

Which configuration helps ensure that critical logs are not lost in case a single log collector or region fails?  

A. Use only one log collector.  
B. Configure redundant log collectors or multiple SLS regions and use log collector groups for failover.  
C. Log only traffic logs.  
D. Store logs only on local disk.  

**Correct answer:** B  

**Explanation:** Redundant log collectors or regions within log collector groups provide resilience for logging infrastructure, ensuring logs remain available even if one collector or region fails.  

**Source:** NetSec‑Pro syllabus – Infrastructure Management and CDSS (logging resilience).  

---

## Question 225

Which is a recommended practice for handling **Outbound SSH** from user networks to the internet?  

A. Allow SSH to any destination without inspection.  
B. Restrict SSH to specific administrative destinations or use SSH proxy/jump hosts; inspect traffic where possible and log all SSH usage.  
C. Block all SSH, including administrative use.  
D. Ignore SSH as it is always safe.  

**Correct answer:** B  

**Explanation:** Outbound SSH can be abused for tunneling; restricting it to known administrative destinations or using jump hosts, and logging/inspecting where possible, reduces risk while supporting legitimate use.  

**Source:** NetSec‑Pro syllabus – Connectivity and Security (egress controls and hardening).  

---

## Question 226

Which method helps validate that Security policy and profiles are aligned with Palo Alto Networks best practices?  

A. Do not change configuration once deployed.  
B. Use Best Practice Assessment (BPA) or AIOps recommendations and update configuration to address identified gaps.  
C. Only rely on internal documentation.  
D. Disable AIOps.  

**Correct answer:** B  

**Explanation:** BPA and AIOps compare deployed configurations against best‑practice baselines and provide actionable recommendations to improve security posture and reliability.  

**Source:** NetSec‑Pro syllabus – Platform Solutions, Services, and Tools (BPA and AIOps).  

---

## Question 227

Which configuration of **Security Profiles** is most aligned with best practices for internet‑facing Security rules?  

A. No profiles applied.  
B. Apply Threat Prevention, URL Filtering, WildFire, DNS Security, and File‑Blocking profiles with appropriate actions tuned per severity and risk.  
C. Only Antivirus.  
D. Only log at session start.  

**Correct answer:** B  

**Explanation:** Internet‑facing rules should use a full set of Security Profiles (Threat, URL, WildFire, DNS, file control) tuned by severity and risk to provide layered protection against modern threats.  

**Source:** NetSec‑Pro syllabus – Platform Solutions, Services, and Tools (CDSS profiles).  

---

## Question 228

Which scenario is appropriate for deploying **active/active HA** instead of active/passive on NGFWs?  

A. When asymmetric routing and load sharing across both firewalls are required.  
B. When only one firewall should ever pass traffic.  
C. When no dynamic routing is used.  
D. When no NAT is configured.  

**Correct answer:** A  

**Explanation:** Active/active HA is suitable when traffic needs to be shared across two firewalls with asymmetric routing support, though it is more complex than active/passive and requires careful design.  

**Source:** NetSec‑Pro syllabus – Maintenance and Configuration (HA design).  

---

## Question 229

Which feature can be used to provide **user notification** and justification prompts when users attempt to access certain URL categories (for example, “business‑and‑economy” outside of working hours)?  

A. DNS sinkhole.  
B. URL Filtering response pages with continue or override actions.  
C. Threat logs.  
D. Decryption exclusions.  

**Correct answer:** B  

**Explanation:** URL Filtering response pages can present block, continue, or override options, sometimes requiring justification or credentials, providing user feedback and auditability for certain categories.  

**Source:** NetSec‑Pro syllabus – Platform Solutions, Services, and Tools (URL policy user interaction).  

---

## Question 230

A security engineer needs to quickly determine which App‑IDs are most commonly used by a specific user group. Which tool is most useful?  

A. System logs.  
B. ACC (Application Command Center) filtered by user or user group.  
C. Only URL Filtering reports.  
D. DNS logs.  

**Correct answer:** B  

**Explanation:** ACC can be filtered by user or group to show which applications they are using, helping correlate user activity with App‑ID for policy refinement.  

**Source:** NetSec‑Pro syllabus – Maintenance and Configuration (monitoring and ACC).  

---

## Question 231

Which statement best describes the relationship between **Security policy** and **QoS policy** on a Palo Alto Networks firewall?  

A. QoS is configured inside Security rules.  
B. Security policy decides whether traffic is permitted, then QoS policy can be applied to shape or prioritize allowed traffic.  
C. QoS is evaluated before Security policy.  
D. Security policy and QoS policy are unrelated and cannot affect the same traffic.  

**Correct answer:** B  

**Explanation:** Security policy determines whether traffic is allowed; QoS policy is then applied to shape or prioritize that allowed traffic based on application, source, destination, and other attributes.  

**Source:** NetSec‑Pro syllabus – Connectivity and Security (policy interactions).  

---

## Question 232

Which configuration helps protect **DNS infrastructure** inside an organization using NGFW capabilities?  

A. Allow all DNS requests without inspection.  
B. Use DNS Security for outbound DNS, Anti‑Spyware sinkholes, and apply Threat Prevention to DNS traffic to block known malicious domains and payloads.  
C. Use only URL Filtering.  
D. Disable DNS logging.  

**Correct answer:** B  

**Explanation:** DNS Security with Anti‑Spyware sinkholes and Threat Prevention protects DNS traffic by blocking or sinkholing queries to malicious domains and inspecting DNS‑related payloads.  

**Source:** NetSec‑Pro syllabus – Infrastructure Management and CDSS (DNS Security).  

---

## Question 233

Which method enables **role‑based access** so that junior admins can only manage specific aspects of configuration?  

A. Give all admins superuser access.  
B. Use admin roles and role‑based access control (RBAC) in Panorama/SCM or on the firewall to restrict access to certain functions.  
C. Use shared login credentials.  
D. Use only CLI access.  

**Correct answer:** B  

**Explanation:** RBAC via admin roles limits what each admin can view or change, aligning permissions with job responsibilities and reducing risk from misconfiguration.  

**Source:** NetSec‑Pro syllabus – Infrastructure Management and CDSS (access control and RBAC).  

---

## Question 234

Which scenario best illustrates using **URL category‑based decryption**?  

A. Decrypting no traffic.  
B. Decrypting only traffic to categories such as “online‑storage‑and‑backup,” “business‑and‑economy,” and “unknown” to maximize security benefit.  
C. Decrypting only social‑networking sites.  
D. Decrypting only internal IP ranges.  

**Correct answer:** B  

**Explanation:** Decryption policies often target categories considered high‑risk or business‑critical, such as storage, business, and unknown sites, to gain maximum security benefit from decryption.  

**Source:** NetSec‑Pro syllabus – Network Security Fundamentals (decryption policy design).  

---

## Question 235

Which configuration helps align NGFW policy with **Zero Trust** for remote access?  

A. A single allow‑all VPN rule for all users.  
B. Per‑application rules that restrict remote users to only the specific applications and data they need, combined with strong authentication and device posture checks.  
C. Only IP‑based rules.  
D. Only inbound inspection from internet.  

**Correct answer:** B  

**Explanation:** Zero Trust for remote access requires granular, per‑application controls, strong identity, and posture checks, rather than broad network‑level access.  

**Source:** NetSec‑Pro syllabus – Connectivity and Security (Zero Trust and remote users).  

---

## Question 236

Which statement best describes the concept of **least privilege** as applied to Security policy design?  

A. Users are given access to all resources by default.  
B. Users and services are given only the minimum access required to perform their tasks, and no more.  
C. Access is granted based on IP subnets only.  
D. All internal traffic is considered trusted.  

**Correct answer:** B  

**Explanation:** Least privilege limits access rights to only what is necessary for a user or service, reducing the risk and impact of compromise.  

**Source:** NetSec‑Pro syllabus – Network Security Fundamentals (access control principles).  

---

## Question 237

Which deployment pattern helps provide **local internet breakout** for branches while still enforcing consistent security?  

A. Backhauling all internet traffic to a central data center.  
B. Using Prisma SD‑WAN for path selection and local breakout to Prisma Access or cloud‑based security enforcement near the branch.  
C. Allowing direct internet access with no inspection.  
D. Using MPLS only.  

**Correct answer:** B  

**Explanation:** SASE designs with Prisma SD‑WAN and Prisma Access allow branches to use local breakout while still sending traffic through cloud security enforcement, maintaining consistent control.  

**Source:** NetSec‑Pro syllabus – NGFW and SASE Solution Functionality (branch connectivity and security).  

---

## Question 238

Which best describes the value of **centralized reporting** in Panorama or SCM for a large distributed deployment?  

A. It replaces all local logging.  
B. It aggregates logs and metrics from many devices into unified reports and dashboards, improving visibility into trends across the environment.  
C. It is only for license usage.  
D. It slows down all devices.  

**Correct answer:** B  

**Explanation:** Centralized reporting uses aggregated logs from many devices to provide a consolidated view of applications, threats, and traffic patterns, which is essential for large environments.  

**Source:** NetSec‑Pro syllabus – Infrastructure Management and CDSS (centralized visibility).  

---

## Question 239

Which feature can help enforce **time‑based controls** on user access to specific applications or URLs (for example, allowing social media only during lunch hours)?  

A. App‑ID only.  
B. Scheduled Security policies combined with App‑ID and URL Filtering.  
C. DNS Security only.  
D. Always‑on VPN.  

**Correct answer:** B  

**Explanation:** Security policies with schedules can allow or block access based on time, and when combined with App‑ID and URL Filtering, they provide precise time‑based control over specific applications and sites.  

**Source:** NetSec‑Pro syllabus – Maintenance and Configuration (policy features).  

---

## Question 240

An analyst wants to confirm which Security rule blocked a suspicious connection attempt. Which log field is most useful?  

A. Byte count.  
B. Rule name (or rule ID) in the Traffic or Threat log entry.  
C. Zone name only.  
D. Application category.  

**Correct answer:** B  

**Explanation:** Traffic and Threat logs include the rule name (or ID) that matched the session, allowing analysts to see which specific Security rule blocked or allowed the connection.  

**Source:** NetSec‑Pro syllabus – Maintenance and Configuration (log interpretation and troubleshooting).  



